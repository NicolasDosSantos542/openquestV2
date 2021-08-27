const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const WeaponSchema = new mongoose.Schema({

    name:String,
    category: String,
    damage:String,
    minSTR:{},
    minDEX:{},
    weight:{},
    size:{},
    price:{},
    special:{},
    range:{},
    type:{}
});

WeaponSchema.plugin(uniqueValidator);

const Weapons = mongoose.model('weapons', WeaponSchema);

module.exports = Weapons;
