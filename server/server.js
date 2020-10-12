console.log('hello from node')

const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
const port = 5000;

const calculationsData = require ('./modules/calculationsData'); 

//hook up static files
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));



//app.get('/calculationArray', (req, res) => {
    //let sum = (firstInput) + (secondInput) 
    //res.send(calculationsData);
//});


app.post('/calculationArray', (req, res) => {
    console.log(req.body);
    //object.push(req.body);
    res.sendStatus(200);
});

function mathFunction(){
    if (operator == '+'){
        return sum = Number(firstInput) + Number(secondInput);
    } console.log(sum);

    else if 
        (operator == '-'){
        return difference = Number(firstInput) - Number(secondInput);
    } console.log(difference);

    else if 
        (operator == '*'){
        return product = Number(firstInput) * Number(secondInput);
    } console.log(product);

    else if 
        (operator == '/'){
        return quotient = Number(firstInput) / Number(secondInput);
    } console.log(quotient);
};

app.listen(port, () => {
    console.log('Up and running on port: ', port);
});