const adminModel = require("../model/adminModel");
const bcrypt = require('bcrypt')

module.exports = {
    doLogin: (req, res) => {
        try {
            let name = req.body
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    },

    signUp: async (req, res) => {
        try {
            let { name, email, password, confirmPassword } = req.body
            await adminModel.findOne({ Email: email }).then(async(admin)=> {
                if (admin) {
                    res.status(200).send({ exist: true, message: 'You are already signed' })
                } else if (password != confirmPassword) {
                    res.status(200).send({ noMatch: true, message: 'Your password is not matched'})
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

}