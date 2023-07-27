const mongoose = require("mongoose");
const Objectid = mongoose.Types.ObjectId

const jobSchema = new mongoose.Schema({
    creationDate: {
        type: Date
    },
    isActive: {
        type: Boolean
    },
    questions: {
        type: Array
    },
    lastDate: {
        type: Date,
        required: true
    },
    totalCandidates: {
        type:Number
    },
    addedBy: {
        type:Objectid
    }
})

module.exports = jobModel = mongoose.model('jobs',jobSchema)