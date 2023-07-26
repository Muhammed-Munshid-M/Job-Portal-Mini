const express = require('express');
const userController = require('../controller/user-controller');
const router = express.Router();

// GET METHODS

router.post('/',userController.doLogin)
// router.post('/signUp',userController.signUp)

module.exports = router