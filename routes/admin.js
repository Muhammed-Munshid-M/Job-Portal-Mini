const express = require('express');
const adminController = require('../controller/admin-controller');
const router = express.Router();

// GET METHODS

router.get('/view-candidates',adminController.getCandidates)
router.get('/view-candidates/:id',adminController.getCandidatesById)
router.get('/get-jobs',adminController.getAllJobs)
router.get('/get-job/:id',adminController.getJobById)
router.get('/get-candidates/:id',adminController.getJobById)

// POST METHODS

router.post('/',adminController.doLogin)
router.post('/signUp',adminController.signUp)
router.post('/add-job/',adminController.addJob)

router.put('/edit-job/:id',adminController.editJob)

router.delete('/delete-candidates/:id',adminController.deleteCandidateById)
router.delete('/delete-job/:id',adminController.deleteJobById)

module.exports = router