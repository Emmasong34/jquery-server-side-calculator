//const calculationArray = require("../../modules/calculationsData");

console.log('hello from js')

$(document).ready(onReady);

let operator = '';

function onReady(){
    console.log('hello from onReady');
    $('.operator').on('click' , operatorFunction);
    $('#equalsButton').on('click', mathSolution);
    $('#clearButton').on('click', clearInputs);
    mathFunction();
}


function operatorFunction() {
    operator = event.target.innerHTML;
   //innerHTML property sets or returns the HTML content (inner HTML) of an element
    console.log(operator);
   }

function mathFunction(){
    //uses numbers from DOM input
    $.ajax({
        method: 'GET',
        url: '/calculationArray',
    }).then(function (response){
        //console.log(response);
        appendToDom(response);
    }).catch(function(error){
        alert(error);
    });
}

function mathSolution(){
        let mathObject = {
            firstInput : $('#firstInput').val(),
            operator : operator,
            secondInput : $('#secondInput').val()
        }
        console.log(mathObject);
        //console.log('I have received', firstInput, operator, secondInput);
        //send data to server via post request
        $.ajax({
            method: 'POST',
            url: '/calculationArray',
             data : {
                firstInput: $('#firstInput').val(),
                operator: operator,
                secondInput: $('#secondInput').val(),
            }
        }).then(function(response){
            console.log('response', response);
            //appendToDom();
            mathFunction();
        }).catch(function(error){
            alert(error);
        });
    };
    //mathSolution()    

function appendToDom(data){
    console.log('in appendToDom');
    //append to dom for all math equations
    $('#displayMath').empty();
    for(let i = 0; i < data.length; i++){
        $('#displayMath').append(`
        <li>equation: ${data[i].firstInput} ${data[i].operator} ${data[i].secondInput} </li>
        `);
    }
}


function clearInputs(){
    //clear inputs
    $('#firstInput').val(''),
    $('#secondInput').val('')
};

