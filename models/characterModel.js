const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const CharacterSchema = new mongoose.Schema({
    name: {type: String},
    userId: {type: String, required: true},
    race: String,
    culture: String,
    Age: Number,
    Gender: String,
    Cult: {
        god: String,
        rank: String
    },
    characteristics: {
        strength: Number,
        constitution: Number,
        dexterity: Number,
        size: Number,
        intelligence: Number,
        power: Number,
        charisma: Number
    },
    attributes: {
        damageModifier: String,
        movementRate: Number,
        heroPoints: Number,
        hitPoints: Number,
        majorWound: Number,
        fatigue: Number
    },
    skills: [
        {
            name: String,
            value: Number
        }
    ],
    spells: [
        {
            name: String,
            magnitude: Number
        }
    ],
    equipment: [{
        name: String,
        enc: Number
    }],
    relationships: [{
        name: String,
        value: Number,
        details: String
    }],
    notes: String


});

CharacterSchema.plugin(uniqueValidator);

const Characters = mongoose.model('characters', CharacterSchema);

module.exports = Characters;
//todo ajouter les Points d'Amelioration(PA)