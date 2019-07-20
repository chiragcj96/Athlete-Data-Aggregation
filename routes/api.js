const express = require("express");
const router = express.Router();

//get the lists of atletes form db
router.get('/athletes', function(req,res){
    res.send({type: 'GET'});
});
//post an athlete to db
router.post('/athletes', function(req,res){
    res.send({type: 'POST'});
});
//update an athlete in db
router.put('/athletes/:id', function(req,res){
    res.send({type: 'PUT'});
});
//delete an athlete from db
router.delete('/athletes/:id', function(req,res){
    res.send({type: 'DELETE'});
});

module.exports = router;