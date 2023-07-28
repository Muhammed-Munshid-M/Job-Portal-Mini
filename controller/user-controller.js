const candidateModel = require("../model/candidateModel");
const jobModel = require("../model/jobModel");

module.exports = {

    contactInfo: async (req, res) => {
        try {
            const jobId = req.params.id
            const { name, age, answers, shortlisted } = req.body
            const candidate = new candidateModel({
                Name: name,
                Age: age,
                jobId: jobId,
                answers: answers,
                shortListed: shortlisted
            })
            candidate.save()
            res.status(200).send({ success: true, message: 'Your Job details added' })
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    },

    contactInfoUpdate: async (req, res) => {
        try {
            const id = req.params.id
            const { name, age, answers, shortlisted } = req.body
            await candidateModel.findOneAndUpdate({ _id: id }, {
                $set: {
                    Name: name,
                    Age: age,
                    answers: answers,
                    shortListed: shortlisted
                }
            })
            res.status(200).send({ success: true, message: 'Your details updated' })
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    },

    viewJobs: async (req, res) => {
        try {
            const jobs = await jobModel.find()
            res.status(200).send({ success: true, allJobs: jobs })
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    },

    viewJobById: async (req, res) => {
        try {
            const id = req.params.id
            const jobById = await jobModel.findOne({ _id: id })
            res.status(200).send({ success: true, jobById: jobById })
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    },
}