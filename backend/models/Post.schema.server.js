const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
    UserId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    Title: String,
    Content: String,
    Image: String,
    Category: String,
    Comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'AnswerModel'}]
}, {collection: "Posts"});

module.exports = PostSchema;
