const express = require("express");

const app = express();

//initialize routes
app.use('/api', require('./routes/api'));

app.get('/', function(){
    console.log('GET request');
});

//listen for requests
app.listen(process.env.port || 3000, function(){
  console.log('listening for requests');
});