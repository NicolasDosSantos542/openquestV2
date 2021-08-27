const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const AttributesSchema = new mongoose.Schema({

});

AttributesSchema.plugin(uniqueValidator);

const Attributes = mongoose.model('attributes', AttributesSchema);

module.exports = Attributes;
