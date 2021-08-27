const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const DailySchema = new mongoose.Schema({

});

DailySchema.plugin(uniqueValidator);

const Dailys = mongoose.model('dailys', DailySchema);

module.exports = Dailys;
