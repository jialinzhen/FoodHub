const mongoose = require("mongoose");
const SavedPostSchema = mongoose.Schema({
  Recipe: {type: mongoose.Types.Schema.ObjectId, ref: 'RecipeModel'},
  User: {type: mongoose.Types.Schema.ObjectId, ref: 'UserModel'}
}, {collection: "SavedPost"});

module.exports = SavedPostSchema;
