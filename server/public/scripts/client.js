console.log('hello from js')

$(document).ready(onReady);

function onReady(){
    console.log('hello from onReady');
    $('#additionButton').on('click', additionFunction);
    
}
function additionFunction(){
    //adds numbers from DOM input
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

function appendToDom(calculationArray){
    $('#results').empty();
    console.log(calculationArray);
    for(let i = 0; i < calculationArray.length; i++){
        $('#results').append(`
        <li>equation: ${calculationArray[i].mathProblem} answer: ${calculationArray[i].result}</li>
        `)
    }
}


