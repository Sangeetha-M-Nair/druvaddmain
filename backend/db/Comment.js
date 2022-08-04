const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    postId: {
        type: mongoose.Types.ObjectId,
        ref: 'post'
    },
    comment: {
        type: String,
        require: true
    },
    likes: [
        { type: mongoose.Types.ObjectId, ref: "User" }
    ],
    dislikes: [
        { type: mongoose.Types.ObjectId, ref: "User" }
    ],
    commentReply: [
        { userId: { type: mongoose.Types.ObjectId, ref: "User" }, comment: { type: String }, Date: { type: Date, default: Date.now() } }
    ],
    Date: {
        type: Date,
        default: Date.now()
    }
})

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;