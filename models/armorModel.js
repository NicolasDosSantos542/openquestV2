const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const ArmorSchema = new mongoose.Schema({
    name:  {type: String, unique: true},
    value: Number,
    weight: Number,
    price: Number,
    description: String
});

ArmorSchema.plugin(uniqueValidator);

const Armors = mongoose.model('armors', ArmorSchema);

module.exports = Armors;
