console.log('hello from node')

const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
const port = 5000;

const calculationsData = require ('./modules/calculationsData'); 
const calculationArray = require('./modules/calculationsData');

//hook up static files
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));



app.get('/calculationArray', (req, res) => { 
    res.send(calculationArray);
});

let taco = 0;

app.post('/calculationArray', (req, res) => {
    console.log(req.body);
    taco = mathFunction(req.body.firstInput, req.body.operator, req.body.secondInput);
    console.log('in post calculation array', taco)
    //req.body is handling the data of math object
    calculationArray.push(req.body);
    res.send({taco});
    res.sendStatus(200);
    
});

function mathFunction(firstInput, operator, secondInput){
    if (operator == '+'){
        return sum = Number(firstInput) + Number(secondInput);
        // console.log('in math function sum =', sum) 
    } 

        else if
            (operator == '-'){
            return difference = Number(firstInput) - Number(secondInput);
            //  console.log(difference)
            }

            else if 
                (operator == '*'){
                return product = Number(firstInput) * Number(secondInput);
                // console.log(product);
            }

                else if 
                    (operator == '/'){
                    return quotient = Number(firstInput) / Number(secondInput);
                     //console.log(quotient)
                    }
}

app.listen(port, () => {
    console.log('Up and running on port: ', port);
});