const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const WeaponSchema = new mongoose.Schema({

});

WeaponSchema.plugin(uniqueValidator);

const Weapons = mongoose.model('weapons', WeaponSchema);

module.exports = Weapons;
