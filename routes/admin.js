const express = require('express');
const adminController = require('../controller/admin-controller');
const router = express.Router();

// GET METHODS

router.post('/',adminController.doLogin)
router.post('/signUp',adminController.signUp)
router.post('/job-form',adminController.jobForm)

module.exports = router