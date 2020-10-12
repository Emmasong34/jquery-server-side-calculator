console.log('hello from js')

$(document).ready(onReady);

function onReady(){
    console.log('hello from onReady');
    $('.operator').on('click' , operatorFunction);
    $('#equalsButton').on('click', mathSolution);
    $('#clearButton').on('click', clearInputs);
}

let calculationArray = [];
//let operator = '';


function operatorFunction() {
    operator = event.target.innerHTML;
    console.log(operator);
   }

function mathFunction(){
    // operator = event.target.innerHTML;
    // console.log(operator);
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
            operator : $('.operator').val(),
            secondInput : $('#secondInput').val()
        }
        console.log(mathObject);
        //console.log('I have received', firstInput, operator, secondInput);
        //send data to server via post request
        $.ajax({
            method: 'POST',
            url: '/calculationArray',
            data: mathObject//{
                // firstInput: firstInput,
                // operator: operator,
                // secondInput: secondInput
            //}
        }).then(function(response){
            console.log('response', response);
            //appendToDom();
        }).catch(function(error){
            alert(error);
        });
    };
    mathSolution()    
        
        


// function appendToDom(){
//     console.log('in appendToDom');
//     //append to dom for all math equations
//     $('#displayMath').empty();
//     for(let i = 0; i < calculationArray.length; i++){
//         $('#displayMath').append(`
//         <li>equation: ${calculationArray[i].firstInput} ${calculationArray[i].operator} ${calculationArray[i].secondInput} </li>
//         `);
//     }
// }


function clearInputs(){
    //clear inputs
    $('#firstInput').val(''),
    $('#secondInput').val('')
};

