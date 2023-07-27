const express = require('express');
const userController = require('../controller/user-controller');
const router = express.Router();

// GET METHODS

router.get('/jobs',userController.viewJobs)

router.post('/contact-info',userController.contactInfo)
// router.post('/signUp',userController.signUp)

module.exports = router