const mongoose = require("mongoose");
const UserSchema = require('../FoodHubbackendmodel/Users.schema.server');
const UserModel = mongoose.model('UserModel', UserSchema);
const passport = require('passport');
const LocalStrategy = require('passport-local');
// passport.use(new LocalStrategy(UserModel.authenticate()));
passport.use(new LocalStrategy(localStrategy));
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());


findUserByCredentials = (credentials) => {
  return UserModel.findOne({
    username: credentials.username,
    password: credentials.password
  })
}

UserRegistration = (userInfo) => {
  return UserModel.register(new UserModel({username: userInfo.Email,
    Description: 'I am a dao server'}), userInfo.Password)
}
module.exports = {
  UserRegistration
}


function localStrategy(username, password, done) {
  findUserByCredentials({username: username, password: password})
    .then(
      function(user) {
        if (!user) { return done(null, false); }
        return done(null, user);
      },
      function(err) {
        if (err) { return done(err); }
      }
    );
}
