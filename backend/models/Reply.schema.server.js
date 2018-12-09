const mongoose = require("mongoose");
const ReplySchema = mongoose.Schema({
  User: String,
  Comment: {type: mongoose.Schema.Types.ObjectId, ref: "CommentModel"},
  Content: String,
  Rating: String,
  Reply: {type: mongoose.Schema.Types.ObjectId, ref: "ReplyModel"}
}, {collection: "Reply"});

module.exports = ReplySchema;
