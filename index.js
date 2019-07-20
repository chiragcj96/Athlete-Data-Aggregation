const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connecting to mongodb
mongoose.connect('mongodb://localhost/athletego');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//initialize routes
app.use('/api', require('./routes/api'));

//Middleware to handle error
app.use(function(err, req, res, next){
    //console.log(err);
    //res.send({error: err.message});
    res.status(422).send({error: err.message});
});

app.get('/', function(){
    console.log('GET request');
});

//listen for requests
app.listen(process.env.port || 3000, function(){
  console.log('listening for requests');
});