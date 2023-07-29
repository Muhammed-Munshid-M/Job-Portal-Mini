const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
})

// eslint-disable-next-line no-undef
module.exports = adminModel = mongoose.model('admin',adminSchema)