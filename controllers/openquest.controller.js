const openquestService = require("../services/openquest.service");

exports.register = async (req, res) => {
    console.log("controller")
    try {
        let resService = await openquestService.addSpell(req.body)
        if (resService.success === true) {
            res.status(201)
            res.send(resService)
        } else {
            res.status(400)
            res.send(resService)
        }
    } catch (error) {
        res.status(403)
        res.send({success: false, error})
    }
}