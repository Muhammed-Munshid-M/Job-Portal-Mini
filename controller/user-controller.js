module.exports = {
    viewJobs: (req, res) => {
        try {
            const name = req.body
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    },

    contactInfo: (req, res) => {
        try {
            const { name, age, answer1,answer2, answer3 } = req.body
            
        } catch (error) {

        }
    }
}