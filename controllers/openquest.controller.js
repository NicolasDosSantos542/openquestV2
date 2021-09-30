const openquestService = require("../services/openquest.service");

exports.register = async (req, res) => {

    try {
        let resService = await openquestService.newCreation(req.body, req.params.dataName)
        resService ? res.status(201).json(resService) : res.status(400).json(resService)
    } catch (error) {
        res.status(403).json({success: false, error})
    }
}
exports.getFromDatabase = async (req, res) => {
    try {
        console.log(req.params.type)
        if (req.params.type ==='divine' || req.params.type ==='commune' || req.params.type ==='profane'|| req.params.type ==='all'){
            let resService = await openquestService.getFromDatabase( req.params.type)
            resService ? res.status(201).json(resService) : res.status(400).json(resService)
            // if (resService.success) {
            //     res.status(201).json(resService)
            // } else {
            //     res.status(400).json(resService)
            // }
        }
        else{
            res.status(403).json({success: false, message:'mettez en paramètre "commune" ou "divine" ou "profane" ou "all'})

        }
    } catch (error) {
        res.status(403).json({success: false, error})
    }
}