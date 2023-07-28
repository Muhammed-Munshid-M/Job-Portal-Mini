const express = require('express');
const userController = require('../controller/user-controller');
const router = express.Router();

// GET METHODS

router.get('/jobs',userController.viewJobs)
router.get('/jobs/:id',userController.viewJobById)

router.post('/contact-info',userController.contactInfo)

router.put('/contact-info/:id',userController.contactInfoUpdate)

module.exports = router