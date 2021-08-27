const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const AttributesSchema = new mongoose.Schema({
    name :{},
    desc :{},
    base : [],
    short :{}
});

AttributesSchema.plugin(uniqueValidator);

const Attributes = mongoose.model('attributes', AttributesSchema);

module.exports = Attributes;
