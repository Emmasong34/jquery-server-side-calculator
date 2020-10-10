console.log('hello from node')

const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
const port = 5000;

const additionProblems = require ('./modules/additionProblems');
const subtractionProblems = require ('./modules/subtractionProblems');
const multiplicationProblems = require ('./modules/multiplicationProblems');
const divisionProblems = require ('./modules/divisionProblems');

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));











app.listen(port, () => {
    console.log('Up and running on port: ', port);
});