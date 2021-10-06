const Spell = require('../models/spellModel');
const Armor = require('../models/armorModel');
const Attribute = require('../models/attributesModel');
const Carac = require('../models/caracModel');
const Daily = require('../models/dailyModel');
const Skill = require('../models/skillModel');
const Weapon = require('../models/weaponModel');
const Character = require('../models/characterModel');
require('dotenv').config();


exports.newCreation = async (body, type) => {

    try {
        let creation;
        switch (type) {
            case "spell":
                creation = new Spell({});
                break;
            case "armor":
                creation = new Armor({});
                break;
            case "attribute":
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
        Object.assign(creation, body)
        await creation.save();
        return {success: true};

    } catch (error) {
        throw error;
    }
}

exports.newCharacter = async(body)=>{
    try {
        console.log("toto")
        let creation = new Character;

        Object.assign(creation, body)
        await creation.save();
        return {success: true};

    } catch (error) {
        throw error;
    }
}

exports.getMagicFromDatabase = async (type) => {
    let response
    try {
        type === 'all' ? response = await Spell.find({}) : response = await Spell.find({category: type});

        return {
            success: true,
            response: response
        }
    } catch (e) {
        throw e;
    }

}
exports.getFromDatabase = async ( type) => {
    try {
        let response;
        switch (type) {
            case "armor":
                response = await Armor.find({});
                break;
            case "attribute":
                response = await Attribute.find({});
                break;
            case "carac":
                response = await Carac.find({});
                break;
            case "daily":
                response = await Daily.find({});
                break;
            case "skill":
                response = await Skill.find({});
                break;
            case "weapon":
                response = await Weapon.find({});
                break;
        }
        return {
            success: true,
            response: response
        };
    } catch (error) {
        throw error;
    }
}
/*
let char = {
    name: "",
    race: "",
    culture: "",
    Age: "",
    Gender: "",
    Cult: {
        god: "",
        rank: ""
    },
    characteristics: {
        strength: "",
        constitution: "",
        dexterity: "",
        size: "",
        intelligence: "",
        power: "",
        charisma: ""
    },
    attributes: {
        damageModifier: "",
        movementRate: "",
        heroPoints: "",
        hitPoints: "",
        majorWound: "",
        fatigue: ""
    },
    skills: [
        {
            name: "",
            value: ""
        }
    ],
    spells: [
        {
            name: "",
            magnitude: ""
        }
    ],
    equipment: [{
        name: "",
        enc : ""
    }],
    relationships: [{
        name: "",
        value: "",
        details: ""
    }],
    notes: ""
}*/
