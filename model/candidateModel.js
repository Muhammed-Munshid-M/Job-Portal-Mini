const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
    submissionDate: {
        type: Date
    },
    Name: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    jobId: {
        type: Number
    },
    answers: {
        type:Array
    },
    shortListed: {
        type:Boolean
    }
})

// eslint-disable-next-line no-undef
module.exports = candidateModel = mongoose.model('candidates',candidateSchema)