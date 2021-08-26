const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const SpellSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['commune', 'divine', 'profane']
    },
    traits: [
        {
            type: String
        }

    ],
    effectShort: {
        type: String,
        required: true
    },
    effect: {
        type: String,
        required: true
    },
    cult: [
        {
            type: String
        }

    ]
});

SpellSchema.plugin(uniqueValidator);

const Users = mongoose.model('spells', SpellSchema);

module.exports = Users;
