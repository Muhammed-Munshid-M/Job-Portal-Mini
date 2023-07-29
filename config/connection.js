const mongoose = require('mongoose')

module.exports.connect = function () {
    mongoose.connect('mongodb://mongodb+srv://munshid:munshid123@cluster0.fyiocsw.mongodb.net/job-portal')
    console.log('mongoose connected');
}
