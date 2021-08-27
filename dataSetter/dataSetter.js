spellsData = require('./datas/spells_data.json');

const res = require("express");
const index = require("../server");
const {log} = require("debug");
const openquestService = require("../services/openquest.service");

// Lib.pushCategories(categories)
//     .then(r => Lib.exploitSaveId(r.saveId, subCategories))
//     // .then(r => console.log("okay", r))
//     .then(r => Lib.pushSubCategories(r))
//     .then(r => Lib.changeProductsSubCategoryId(r.saveId, products))
//     // .then(r => console.log('okay', r.saveId))
//     .then(r => Lib.pushProducts(r)).catch(e => console.log(e))
//     .then(r => process.exit())


async function addSpell(data, type) {
    for (const element of data) {
        try {
            let resService  = await openquestService.newCreation(element, type);
            if (resService.success === true) {
                console.log(resService)
            } else {
                console.log(resService)
            }
        } catch (error) {
            console.log({success: false, error})
        }
    }
}

addSpell(spellsData).then(r => console.log(r))
