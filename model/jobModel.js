const mongoose = require("mongoose");
const Objectid = mongoose.Types.ObjectId

const jobSchema = new mongoose.Schema({
    addedBy: {
        type:Objectid,
        ref:'admin'
    },
    job_id: {
        type: Number
    },
    creationDate: {
        type: Date
    },
    isActive: {
        type: Boolean
    },
    questionsArray: {
        type: Array
    },
    lastDate: {
        type: Date,
        required: true
    },
    totalCandidates: {
        type:Array,
    }
})

// eslint-disable-next-line no-undef
module.exports = jobModel = mongoose.model('jobs',jobSchema)