const candidateModel = require("../model/candidateModel");
const jobModel = require("../model/jobModel");

module.exports = {
    viewJobs: (req, res) => {
        try {
            const name = req.body
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    },

    contactInfo: async (req, res) => {
        try {
            const { name, age, answers, shortListed } = req.body
            const candidate = new candidateModel({
                Name:name,
                Age:age,
                answers:answers,
                shortListed:shortListed
            })
            candidate.save()
            res.status(200).send({ success: true, message: 'Your Job details added' })
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    }
}