const openquestService = require("../services/openquest.service");
const Armor = require("../models/armorModel");
const Attribute = require("../models/attributesModel");
const Carac = require("../models/caracModel");
const Daily = require("../models/dailyModel");
const Skill = require("../models/skillModel");
const Weapon = require("../models/weaponModel");

exports.register = async (req, res) => {

    try {
        let resService = await openquestService.newCreation(req.body, req.params.dataName)
        resService ? res.status(201).json(resService) : res.status(400).json(resService)
    } catch (error) {
        res.status(403).json({success: false, error})
    }
}
exports.getMagicFromDatabase = async (req, res) => {
    try {
        if (req.params.type === 'divine' || req.params.type === 'commune' || req.params.type === 'profane' || req.params.type === 'all') {
            let resService = await openquestService.getMagicFromDatabase(req.params.type)
            resService ? res.status(201).json(resService) : res.status(400).json(resService)
        } else {
            res.status(403).json({
                success: false,
                message: 'mettez en paramètre "commune" ou "divine" ou "profane" ou "all'
            })

        }
    } catch (error) {
        res.status(403).json({success: false, error})
    }
}
exports.getFromDatabase = async (req, res) => {
    try {
        switch (req.params.type) {
            case "armor":
            case "attribute":
            case "carac":
            case "daily":
            case "skill":
            case "weapon":
                let resService = await openquestService.getFromDatabase(req.params.type)
                resService ? res.status(201).json(resService) : res.status(400).json(resService)
                break;
            default:
                res.status(403).json({
                    success: false,
                    message: 'mettez en paramètre "armor","attribute","carac","daily","skill" ou "weapon"'
                })
                break;
        }

    } catch (error) {
        res.status(403).json({success: false, error})
    }
}