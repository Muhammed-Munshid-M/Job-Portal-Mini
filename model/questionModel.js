const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    jobId: {
        type: Number
    },
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
    },
    selectItem: {
        type: String
    },
    minExprnce: {
        type: Number
    }
})

// eslint-disable-next-line no-undef
module.exports = questionModel = mongoose.model('questions', questionSchema)