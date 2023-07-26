module.exports = {
    doLogin: (req, res) => {
        try {
            let name = req.body
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    },
}