const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const CaracSchema = new mongoose.Schema({
    name : {},
    description : {},
    short : {}
});

CaracSchema.plugin(uniqueValidator);

const Caracs = mongoose.model('caracs', CaracSchema);

module.exports = Caracs;
