const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let educationSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    schoolName: {
        type: String,
        require: true,
    },
    education: {
        type: String,
        require: true
    },
    educationType: {
        type: String,
        default: "Full-Time"
    },
    startingYear: {
        type: Number,
        require: true
    },
    passingYear: {
        type: Number,
        require: true
    },
    location: {
        type: String,
        default: 'null'
    },
})
// Creating Collection userEduction or using
const UserEducation = mongoose.model('userEducation', educationSchema);

module.exports = UserEducation;