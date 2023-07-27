const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    questionTitle: {
        type: String,
        required: true
    },
    subTitle: {
        type: String
    },
    answerType: {
        type: String,
    },
    isMandatory: {
        type: Boolean
    }
})

module.exports = questionModel = mongoose.model('questions',questionSchema)