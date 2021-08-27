const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const AttributeSchema = new mongoose.Schema({

});

AttributeSchema.plugin(uniqueValidator);

const Attributes = mongoose.model('attributes', AttributeSchema);

module.exports = Attributes;
