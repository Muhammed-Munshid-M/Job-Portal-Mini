const mongoose = require('mongoose')

module.exports.connect = function () {
    mongoose.connect('mongodb://0.0.0.0:27017/job-portal')
    console.log('mongoose connected');
}
