console.log('hello from js')

$(document).ready(onReady);

function onReady(){
    console.log('hello from onReady');
    mathFunction();
    //$('#additionButton').on('click', mathFunction);
    $('#equalsButton').on('click', appendToDom);
    $('#clearButton').on('click', clearInputs);
    
}




function mathFunction(){
    //uses numbers from DOM input
    $.ajax({
        method: 'GET',
        url: '/calculationArray',
    }).then(function (response){
        console.log(response);
        appendToDom(response);
    }).catch(function(error){
        alert(error);
    });

}
 

function mathSolution(){
    console.log('hello from mathSolution');
        let firstInput = $('#firstInput').val();
        let operator = $('#operator').val();
        let secondInput = $('#secondInput').val();
        console.log('I have received', firstInput, operator, secondInput);
        //send data to server via post request
        $.ajax({
            method: 'POST',
            url: '/calculationsArray',
            data: {
                firstInput: firstInput,
                operator: operator,
                secondInput: secondInput
            }
        }).then(function(response){
            console.log('response', response);
            appendToDom();
        });
        
}

function appendToDom(calculationArray){
    console.log('in appendToDom');
    //append to dom for all math equations
    $('#displayMath').empty();
    for(let i = 0; i < calculationArray.length; i++){
        $('#displayMath').append(`
        <li>equation: ${equation.firstInput} ${equation.operator} ${equation.secondInput}  </li>
        `);
    }
}


function clearInputs(){
    //clear inputs
    $('#firstInput').val(''),
    $('#secondInput').val('')
}


