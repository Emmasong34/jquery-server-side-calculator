console.log('hello from node')

const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
const port = 5000;

const calculationsData = require ('./modules/calculationsData'); 

//hook up static files
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));



app.get('/calculationArray', (req, res) => {
    res.send(calculationsData);
});


app.post('/calculationArray', (req, res) => {
    console.log(req.body);
    calculationArray.push(req.body);
    res.sendStatus(200);
});








app.listen(port, () => {
    console.log('Up and running on port: ', port);
});