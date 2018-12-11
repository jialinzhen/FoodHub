const mongoose = require("mongoose");
const AnswerSchema = mongoose.Schema({
  User: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
  Post: {type: mongoose.Schema.Types.ObjectId, ref: "PostModel"},
  Content: String,
  Reply: [{type: mongoose.Schema.Types.ObjectId, ref: "ReplyModel"}]
}, {collection: "Answer"});

module.exports = AnswerSchema;
