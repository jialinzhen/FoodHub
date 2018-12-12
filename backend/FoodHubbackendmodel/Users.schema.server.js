const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  Name: String,
  Email: String,
  Password: String,
  PictureUrl: String,
  Description: String,
  Credentials: String
}, {collection: "Users"});

module.exports = UserSchema;
