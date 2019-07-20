const express = require("express");
const router = express.Router();
const Athlete = require('../models/athlete');

//get the lists of atletes form db
router.get('/athletes', function(req,res, next){
    Athlete.find({}).then(function(athletes){
        res.send(athletes);
    });
});
//post an athlete to db
router.post('/athletes', function(req,res, next){
    Athlete.create(req.body).then(function(athlete){            // var athlete = new Athlete(req.body); athlete.save();
        res.send(athlete);
    }).catch(next);                                             //if error found(above func fails), it is catched here        
});
//update an athlete in db
router.put('/athletes/:id', function(req,res, next){
    Athlete.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(athlete){
        Athlete.findOne({_id: req.params.id}).then(function(athlete){
            res.send(athlete);
        });
    });
});
//delete an athlete from db
router.delete('/athletes/:id', function(req,res, next){
    res.send({type: 'DELETE'});
});

module.exports = router;