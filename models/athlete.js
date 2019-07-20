const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//The Athlete schema and model
const AthleteSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Complete your name']
    },
    gender: {
        type: String
    },
    sports: {
        type: String
    }
});

const Athlete = mongoose.model('athlete', AthleteSchema);

module.exports = Athlete;