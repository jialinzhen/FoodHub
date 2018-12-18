const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  Name: String,
  PictureUrl: String,
  Description: String,
  Credentials: String
}, {collection: "Users"});

module.exports = UserSchema;



