const passportLocalMongoose = require('passport-local-mongoose');
const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');
const d = new Date();
d.setDate(d.getDate() - 1);


const user = mongoose.Schema({
    'googleId': {
        type: String,
    },
    'faceBookId': {
        type: String,
    },
    'githubId': {
        type: String,
    },
    'firstName': {
        type: String,
        lowercase: true,
        default: ''
    },
    'lastName': {
        type: String,
        lowercase: true,
        default: ''
    },
    'username': {
        type: String,
        lowercase: true,
        require: true
    },
    'city': {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    'phoneNumber': {
        type: Number,
        default: null
    },
    'DOB': {
        type: Date,
        default: null
    },
    'skills': [
        { type: String }
    ],
    'country': {
        type: String,
        default: null
    },
    'gender': {
        type: String,
        default: ''
    },
    'languages': [
        { type: String },
    ],
    'titleDescription': {
        type: String,
        default: ''
    },
    'aboutDescription': {
        type: String,
        default: ''
    },
    'followers': [{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }],
    // To add the following
    'following': [{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }],

    // To Activate or Deactivate the user
    'status': {
        type: Boolean,
        default: true,
    },
    'date': {
        type: Date,
        default: Date.now()
    },
    'role': {
        type: String,
        default: ''
    },
    'referCode': {
        type: String,
        unique: true
    },
    'referals': [
        { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    ],
    'usedRefers': {
        type: Number,
        default: 0
    },
    'date': {
        type: Date,
        default: Date.now()
    },
    'points': {
        type: Number,
        default: 0
    },
    'youtubeChannelId': {
        type: String,
        default: ''
    },
    'channelName': {
        type: String,
    },
    'postsBlockedUntil': {
        type: Date,
        default: d
    },
    'commentsBlockedUntil': {
        type: Date,
        default: d
    },
    'friends': [
        { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    ],
    'friendRequests': [
        { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    ],
    'groupInvites': [
        {
            groupId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Group'
            },
            senderName: {
                type: String
            },
            groupName : {
                type : String
            }
        }]
});

user.plugin(passportLocalMongoose);
user.plugin(findOrCreate);

const User = mongoose.model('user', user);

module.exports = User;