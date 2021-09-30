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
        let resService = await openquestService.getFromDatabase( req.params.type)
        resService ? res.status(201).json(resService) : res.status(400).json(resService)
        // if (resService.success) {
        //     res.status(201).json(resService)
        // } else {
        //     res.status(400).json(resService)
        // }
    } catch (error) {
        res.status(403).json({success: false, error})
    }
}