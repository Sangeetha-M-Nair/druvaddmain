const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let jobSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    companyName: {
        type: String,
        require: true,
        ref: 'Company'
    },
    jobTitle: {
        type: String,
        require: true
    },
    hrAdmin: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],


    // Only If Category is Social-media or freelancing  --> Remove 
    minBudget: {
        type: Number,
        require: true
    },

    maxBudget: {
        type: Number,
        require: true
    },

    //minimum subscriber limit
    limitSubscriber: {
        type: Number,
        default: 5000,
        require: true
    },

    limitFollower: {
        type: Number,
        require: true
    },

    description: {
        type: String,
        require: true
    },
    // company type, crypto, vfx
    category: {
        type: String,
        require: true
    },
    
    skillsRated: [
        {
            name: {
                type: String
            },
            value: {
                type: Number
            }

            ,
        }
    ],

    skills: [
        { type: String }
    ],

    // eg:- YouTube, Instagram
    type: [{
        type: String
    }],

    // eg:- job, social media, freelancing
    jobType: {
        type: String,
        require: true
    },

    // eg:- intern , full time, part time
    jobSubType: {
        type: String,
        require: true
    },

    //paid, unpaid 
    jobSubSubType : {
        type : String
    },

    country: {
        type: String,
    },
    //city
    location: {
        type: String,
    },
    languages:
        [{ type: String }]
    ,

    //job active or not active pending, fulfilled, cancelled 
    status: {
        type: Boolean,
        default: false
    },

    // To Calculate the date
    date: {
        type: Date,
        default: Date.now()
    }

})
// Creating Collection Job or using
const Job = mongoose.model('job', jobSchema);

module.exports = Job;