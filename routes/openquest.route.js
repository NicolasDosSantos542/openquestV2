const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const checkTokenMiddleware = require('../controllers/jwt.controller');
const openquestController = require("../controllers/openquest.controller");

//routes ADMIN
//POST
router.post('admin/magic/:dataName',checkTokenMiddleware.checkTokenAdmin, openquestController.register); //utilisé pour remplir la base de données

//GET

//DELETE
router.delete('admin/character/:id',checkTokenMiddleware.checkTokenAdmin, openquestController.deleteCharacter )


//routes USER
//POST
router.post('/character/',checkTokenMiddleware.checkToken, openquestController.createCharacter);

//GET
router.get('/magic/:type', openquestController.getMagicFromDatabase);
router.get('/get/:type', openquestController.getFromDatabase);

//DELETE
router.delete('/character/:id',checkTokenMiddleware.checkToken, openquestController.deleteCharacter )

module.exports = router;