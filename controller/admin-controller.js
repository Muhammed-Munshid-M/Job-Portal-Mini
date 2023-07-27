const adminModel = require("../model/adminModel");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

    jobForm: (req, res) => {
        try {
            const { questionTitle, subTitle, answerType, isMandatory,dropDown, min, jobId } = req.body
            
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: true })
        }
    }

}