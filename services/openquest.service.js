const Spell = require('../models/spellModel');
require('dotenv').config();
const bcrypt = require('bcrypt')
const validation = require('../validation/validation')
const jwt = require("jsonwebtoken");

exports.addSpell = async (body) => {
    try {

        let spell = new Spell({});
        Object.assign(spell, body )
        await spell.save();
        return {success: true};

    } catch (error) {
        throw error;
    }
}