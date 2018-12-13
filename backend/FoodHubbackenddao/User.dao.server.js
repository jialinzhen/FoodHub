const mongoose = require("mongoose");
const UserSchema = require('../FoodHubbackendmodel/Users.schema.server');
const UserModel = mongoose.model('UserModel', UserSchema);
const passport = require('passport');
const LocalStrategy = require('passport-local');
passport.use(new LocalStrategy(UserModel.authenticate()));
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

UserRegistration = (userInfo) => {
  return UserModel.register(new UserModel({username: userInfo.Email, Description: 'I am a dao server'}), userInfo.Password)
}
module.exports = {
  UserRegistration
}
