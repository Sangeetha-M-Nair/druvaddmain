const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description : {
        type : String,
        required : true
    },
    superAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    admins: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    moderators: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    memberApproveRequired : {
        type : Boolean,
        default : true
    },
    memberRequests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }],

    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    postApproveRequired : {
        type : Boolean,
        default : true
    },
    pendingPosts: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Post'

    }],
    approvedPosts : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Post'
    }]
});
const Group = mongoose.model('group', groupSchema);
module.exports = Group;
