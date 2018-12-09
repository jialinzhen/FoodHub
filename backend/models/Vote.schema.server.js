const mongoose = require("mongoose");
const VoteSchema = mongoose.Schema({
  User: String,
  Post: {type: mongoose.Schema.Types.ObjectId, ref: "PostModel"},
  Up: boolean
}, {collection: "Vote"});

module.exports = VoteSchema;
