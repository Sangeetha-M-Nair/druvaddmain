const mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    companyName: {
        type: String,
        ref: 'Company',
        default : null
    },
    name : {
        type : String,
        default : null
    },
    groupPost : {
        type : Boolean,
        default : false
    },
    group : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Group'
    },
    ImgPath: {
        type: String,
    },
    Description: {
        type: String,
    },
    Likes: [
        { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    ],
    Dislikes: [
        { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    ],
    Date: {
        type: Date,
        default: Date.now()
    }
})

const post = mongoose.model('post', postSchema);
module.exports = post;