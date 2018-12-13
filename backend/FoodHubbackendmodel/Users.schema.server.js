const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
const UserSchema = mongoose.Schema({
  Name: String,
  PictureUrl: String,
  Description: String,
  Credentials: String
}, {collection: "Users"});
UserSchema.plugin(passportLocalMongoose);

module.exports = UserSchema;
