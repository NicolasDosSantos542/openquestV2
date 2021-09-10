const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const DailySchema = new mongoose.Schema({
    name :{type: String, unique: true},
    category : {},
    weight : {},
    price : {},
    description : {}
});

DailySchema.plugin(uniqueValidator);

const Dailys = mongoose.model('dailys', DailySchema);

module.exports = Dailys;
