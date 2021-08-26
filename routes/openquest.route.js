const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const checkTokenMiddleware = require('../controllers/jwt.controller');
const openquestController = require("../controllers/openquest.controller");

//POST
router.post('/magic', openquestController.register);

module.exports = router;