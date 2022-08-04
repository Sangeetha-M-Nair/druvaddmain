const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const Schema = mongoose.Schema;

let comapanySchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        default: 'null'
    },
    category : {
        type : String,
        default : null
    },
    website : {
        type : String,
        default : null
    },
    username : {
        type : String,
        unique : true
    },
    titleDesc : {
        type : String,
        default : null
    },
    fullDesc : {
        type : String,
        default : null
    },
    Admin: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
        
    }],
    SubAdmin: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }],
    HrAdmin: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        
    }],
    ContentAdmin : [{
        type: mongoose.Schema.Types.ObjectId,
        ref :'User',
        
    }],
    compnayStatus: {
        type: Boolean,
        default: false
    },

    company_Followers: [
        { type: ObjectId, ref: 'User' }
    ],
    date: {
        type: Date,
        default: Date.now()
    }
})
// Creating Collection Job or using
const Company = mongoose.model('company', comapanySchema);


module.exports = Company;