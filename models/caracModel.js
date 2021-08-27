const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const SpellSchema = new mongoose.Schema({

});

SpellSchema.plugin(uniqueValidator);

const Spells = mongoose.model('spells', SpellSchema);

module.exports = Spells;
