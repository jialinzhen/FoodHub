const mongoose = require("mongoose");
const ReplySchema = mongoose.Schema({
  User: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
  Content: String,
  Rating: String,
  Reply: [{type: mongoose.Schema.Types.ObjectId, ref: "ReplyModel"}]
}, {collection: "Reply"});

module.exports = ReplySchema;
