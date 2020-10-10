console.log('hello from node')

const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
const port = 5000;

const calculationsData = require ('./modules/calculationsData'); 

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));



app.get('/calculationArray', (req, res) => {
    res.send(calculationsData);
});

function additionFunction(){
//add numbers from DOM input
}











app.listen(port, () => {
    console.log('Up and running on port: ', port);
});