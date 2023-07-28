const express = require('express');
const adminController = require('../controller/admin-controller');
const router = express.Router();

// GET METHODS

router.get('/view-candidates',adminController.getCandidates)
router.get('/view-candidates/:id',adminController.getCandidatesById)
router.get('/get-jobs',adminController.getAllJobs)
router.get('/get-job/:id',adminController.getJobById)
router.get('/get-candidates/:id',adminController.getCandidatesByJobId)
router.get('/get-questions/:id',adminController.getAllQuestions)

// POST METHODS

router.post('/',adminController.doLogin)
router.post('/signUp',adminController.signUp)
router.post('/add-job/:id',adminController.addJob)
router.post('/add-form',adminController.addForm)

// PUT METHODS

router.put('/edit-job/:id',adminController.editJob)
router.put('/edit-form/:id',adminController.editForm)

// DELETE METHODS

router.delete('/delete-candidates/:id',adminController.deleteCandidateById)
router.delete('/delete-job/:id',adminController.deleteJobById)
router.delete('/delete-form/:id',adminController.deleteFormByJobId)
router.delete('/delete-form-by-id/:id',adminController.deleteFormById)

module.exports = router