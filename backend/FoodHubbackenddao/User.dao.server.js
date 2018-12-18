const mongoose = require("mongoose");
const UserSchema = require('../FoodHubbackendmodel/Users.schema.server');
const UserModel = mongoose.model('UserModel', UserSchema);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


function serializeUser(user, done) {
  done(null, user);
}

function deserializeUser(user, done) {
  UserModel.findOne({_id: user._id})
    .then(
      function(user){
        done(null, user);
      },
      function(err){
        done(err, null);
      }
    );
}

findUserByCredentials = (credentials) => {
  return UserModel.findOne({
    username: credentials.username,
    password: credentials.password
  })
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

createUser = (user) => {
  return UserModel.create({
    username: user.username,
    password: user.password
  })
}
findUserByUserName = (username) => {
  return UserModel.findOne({username: username});
}


passport.use(new LocalStrategy(localStrategy));
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

module.exports = {
  createUser,
  findUserByUserName
}




