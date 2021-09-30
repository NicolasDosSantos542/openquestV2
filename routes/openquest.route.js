const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const checkTokenMiddleware = require('../controllers/jwt.controller');
const openquestController = require("../controllers/openquest.controller");

//POST
router.post('/magic/:dataName', openquestController.register);

//GET
router.get('/magic/:type', openquestController.getFromDatabase);



module.exports = router;