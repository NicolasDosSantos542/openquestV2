const Spell = require('../models/spellModel');
const Armor = require('../models/armorModel');
const Attribute = require('../models/armorModel');
const Carac = require('../models/caracModel');
const Daily = require('../models/dailyModel');
const Skill = require('../models/skillModel');
const Weapon = require('../models/weaponModel');
require('dotenv').config();
const bcrypt = require('bcrypt')
const validation = require('../validation/validation')
const jwt = require("jsonwebtoken");




exports.newCreation = async (body, type) => {
    try {
        let creation;
        switch (type) {
            case "spell":
                creation = new Spell({});
                break;
            case "armor":
                creation = new Armor({});
                break;case "attribute":
                creation = new Attribute({});
                break;
            case "carac":
                creation = new Carac({});
                break;
            case "daily":
                creation = new Daily({});
                break;
            case "skill":
                creation = new Skill({});
                break;
            case "weapon":
                creation = new Weapon({});
                break;

        }
        Object.assign(creation, body )
        await creation.save();
        return {success: true};

    } catch (error) {
        throw error;
    }
}