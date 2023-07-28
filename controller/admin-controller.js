const adminModel = require("../model/adminModel");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const questionModel = require("../model/questionModel");
const candidateModel = require("../model/candidateModel");
const jobModel = require("../model/jobModel");

module.exports = {
    doLogin: async (req, res) => {
        try {
            const { email, password } = req.body
            const admin = await adminModel.findOne({ Email: email })
            if (admin) {
                const isMatchPswrd = await bcrypt.compare(password, admin.Password)
                if (!isMatchPswrd) {
                    res.status(200).send({ message: "Incorrect Password", noMatch: true })
                } else {
                    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
                        expiresIn: '1d'
                    })
                    res.status(200).send({ message: "Login Successfull", success: true, token: token })
                }
            } else {
                res.status(200).send({ message: "Incorrect Email or Password", noUser: true })
            }
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    },

    signUp: async (req, res) => {
        try {
            let { name, email, password, confirmPassword } = req.body
            await adminModel.findOne({ Email: email }).then(async (admin) => {
                if (admin) {
                    res.status(200).send({ exist: true, message: 'You are already signed' })
                } else if (password !== confirmPassword) {
                    res.status(200).send({ noMatch: true, message: 'Your password is not matched' })
                }
                else {
                    const salt = await bcrypt.genSalt(10)
                    const hashedPassword = await bcrypt.hash(password, salt)
                    const Password = hashedPassword
                    const newAdmin = new adminModel({
                        Name: name,
                        Email: email,
                        Password: Password
                    })
                    await newAdmin.save()
                    res.status(200).send({ success: true, message: 'Your signUp success' })
                }
            })
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    },

    getCandidates: async (req, res) => {
        try {
            const candidates = await candidateModel.find()
            res.status(200).send({ success: true, candidates: candidates })
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    },

    getCandidatesById: async (req, res) => {
        try {
            const id = req.params.id
            const candidate = await candidateModel.findOne({ _id: id })
            res.status(200).send({ success: true, candidateById: candidate })
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    },

    deleteCandidateById: async (req, res) => {
        try {
            const id = req.params.id
            await candidateModel.deleteOne({ _id: id })
            res.status(200).send({ deleted: true })
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    },

    getAllJobs: async (req, res) => {
        try {
            const allJobs = await jobModel.find()
            res.status(200).send({ success: true, allJobs: allJobs })
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    },

    editJob: async (req, res) => {
        try {
            const id = req.params.id
            const { isActive, lastDate } = req.body
            await jobModel.findOneAndUpdate({ _id: id }, {
                $set: {
                    isActive: isActive,
                    lastDate: lastDate
                }
            })
            res.status(200).send({ success: true, message: 'Your jobForm updated' })
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    },

    addForm: async (req, res) => {
        try {
            const { jobId, questionTitle } = req.body
            const questions = new questionModel({
                jobId: jobId,
                questionTitle: questionTitle
            })
            await questions.save()
            res.status(200).send({ success: true, message: 'Your jobForm updated' })
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    },

    addJob: async (req, res) => {
        try {
            const adminId = req.query.adminId
            const jobId = req.query.jobId
            const { isActive, lastDate } = req.body
            const candidates = await candidateModel.find({ jobId: jobId })
            const jobs = new jobModel({
                job_id: jobId,
                creationDate: new Date(),
                isActive: isActive,
                lastDate: new Date(lastDate),
                totalCandidates: candidates,
                addedBy: adminId,
            })
            await jobs.save()
            const result = await jobModel.aggregate([
                {
                    $lookup: {
                        from: "questions",
                        localField: "jobId",
                        foreignField: "job_id",
                        as: "questionsArray",
                    },
                }
            ])
            await jobModel.updateOne({ job_id: jobId }, {
                $set: {
                    questionsArray: result
                }
            })
            res.status(200).send({ success: true, jobs: result })
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    },

    getJobById: async (req, res) => {
        try {
            const id = req.params.id
            const jobById = await candidateModel.find({ jobId: id })
            res.status(200).send({ success: true, jobById: jobById })
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    },

    getCandidatesByJobId: async (req, res) => {
        try {
            const id = req.params.id
            const jobById = await jobModel.findOne({ _id: id })
            res.status(200).send({ success: true, jobById: jobById })
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    },


    deleteJobById: async (req, res) => {
        try {
            const id = req.params.id
            await jobModel.deleteOne({ _id: id })
            res.status(200).send({ deleted: true })
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    }


}