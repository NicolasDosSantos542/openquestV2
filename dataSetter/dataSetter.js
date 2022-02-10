spellsData = require('./datas/spells_data.json');
armorData = require('./datas/armors_data.json');
attributeData = require('./datas/attributes_data.json');
caracData = require('./datas/carac_data.json');
dailyData = require('./datas/daily_data.json');
skillData = require('./datas/skills_data.json');
weaponsData = require('./datas/weapons_data.json');

const res = require("express");
const index = require("../server");
const {log} = require("debug");
const openquestService = require("../services/openquest.service");

let array = {

"spell":spellsData,
"armor":armorData,
"attribute":attributeData,
"carac":caracData,
"daily":dailyData,
"skill":skillData,
"weapon":weaponsData
}

async function addData(data, type) {
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
// async function addData(data, type) {
//
//         try {
//             let resService  = await openquestService.newCreation(data[0], type);
//             if (resService.success === true) {
//                 console.log(resService)
//             } else {
//                 console.log(resService)
//             }
//         } catch (error) {
//             console.log({success: false, error})
//         }
//
// }
for (const property in array) {



    addData(array[property], property).then(r => console.log("fin" )).then(r => process.exit(1))

  }
