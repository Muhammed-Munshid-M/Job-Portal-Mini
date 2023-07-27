const mongoose = require("mongoose");
const Objectid = mongoose.Types.ObjectId

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
        type: Objectid
    },
    answers: {
        type:Array
    },
    shortListed: {
        type:Boolean
    }
})

module.exports = candidateModel = mongoose.model('candidates',candidateSchema)