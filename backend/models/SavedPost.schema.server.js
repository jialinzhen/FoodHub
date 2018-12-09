const mongoose = require("mongoose");
const SavedPostSchema = mongoose.Schema({
  Post: {type: mongoose.Schema.Types.ObjectId, ref: "PostModel"},
  User: String
}, {collection: "SavedPost"});

module.exports = SavedPostSchema;
