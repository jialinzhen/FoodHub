const mongoose = require("mongoose");
const CommentSchema = mongoose.Schema({
  User: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  Content: String,
  Rating: String
}, {collection: "Comments"});

module.exports = CommentSchema;
