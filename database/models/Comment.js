const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    content: String,
    date: {
        type: Date,
        default: new Date()
      },
    username: String,

    // each comment can only relates to one blog, so it's not in array
    post: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('Comment', CommentSchema);
