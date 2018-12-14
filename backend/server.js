var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var passport = require('passport');
var passportLocal = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
var LocalStrategy = require('passport-local');
// Start All the Routes
require('./data')();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS");
  next();
})
app.use(passport.initialize());
app.use(passport.session());
app.use(require("express-session")({
  secret: "ANY KEY",
  resave: false,
  saveUninitialized: false
}))
const Userdao = require('../backend/FoodHubbackenddao/User.dao.server');
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
})
const Commentdao = require('../backend/FoodHubbackenddao/Comments.dao.server');
const Recipedao = require('../backend/FoodHubbackenddao/Recipe.dao.server');
app.post('/api/addrecipe', (req, res) => {
  Recipedao.createSingleRecipe(req.body).then(recipe => res.send(recipe))
})
app.get('/api/allrecipe', (req, res) => {
  Recipedao.fetchAllRecipe().then(response => res.send(response))
})
app.get('/api/foods/:id', (req, res) => {
  Recipedao.fetchOneRecipe(req.params.id).then(response => res.send(response))
})
app.put('/api/foods/:id', (req, res) => {
  Recipedao.fetchOneRecipeAndUpdate(req.params.id, req.body).then(response => res.send(response))
})
app.delete('/api/foods/:id', (req, res) => {
  Recipedao.fetchOneRecipeAndDelete(req.params.id).then((response) =>
    Commentdao.DeleteAllCommentForThePost(req.params.id)).then(response => res.send(response))
})
app.post('/api/foods/:id/comment', (req, res) => {
  Commentdao.createComment(req.params.id, req.body).then(commentObject =>
    Recipedao.AddCommentToTheRecipe(req.params.id, commentObject)).then(response => res.send(response))
});
app.get('/api/foods/:id/comment/:commentid', (req, res) => {
  Commentdao.FetchOneCommentById(req.params.commentid).then(response => res.send(response))
})
app.put('/api/foods/:id/comment/:commentid', (req, res) => {
  Commentdao.UpdateOneCommentForAPost(req.params.commentid, req.body).then(response => res.send(response))
})
app.delete('/api/foods/:id/comment/:commentid', (req, res) => {
  Commentdao.DeleteOneCommentForAPost(req.params.commentid).then(response => {
    Recipedao.DeleteACommentInAPost(req.params.id, req.params.commentid)
  }).then(response => res.send(response))
})
app.post('/api/register', (req, res) => {
  Userdao.UserRegistration(req.body).then(user => {
    return passport.authenticate('local');
  }).then(response => res.send(req.user))
});
// login and logout
// app.post('/api/login', (req, res) => passport.authenticate('local')((req, res) => res.send("Succeed")));
function login(req, res) {
  let user = req.user;
  res.json(user);
}
// app.post('/api/login', passport.authenticate("local"), (req, res) => {
//   return res.json(req.user);
// })
app.post('/api/login', passport.authenticate("local"), login);
app.get('/api/logout', (req, res) => {
  req.logout()
})
app.listen(3002);
