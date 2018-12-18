let express = require("express");
let bodyParser = require('body-parser');
let app = express();
let passport = require('passport');
let passportLocal = require('passport-local');
let passportLocalMongoose = require('passport-local-mongoose');
let LocalStrategy = require('passport-local');
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
app.use(require("express-session")({
  secret: "ANY KEY",
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
const Userdao = require('../backend/FoodHubbackenddao/User.dao.server');
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
})
const Commentdao = require('../backend/FoodHubbackenddao/Comments.dao.server');
const Recipedao = require('../backend/FoodHubbackenddao/Recipe.dao.server');
const SaveRecipedao = require('../backend/FoodHubbackenddao/SavedRecipes.dao.server')
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
app.post('/api/foods/:id/likes', (req, res) => {
  SaveRecipedao.onSaveRecipe('5c15f2c1b7be38caa02508fc', req.params.id).then(response => res.send(response));
})
//Auth Route Starts

function login(req, res) {
  var user = req.user;
  res.json(user);
}

app.post('/api/register', passport.authenticate('local'), (req, res) => {
  Userdao.findUserByUserName(req.body.username)
    .then(user => {
      if(user) {
        res.json(null);
      } else {
        Userdao.createUser(req.body).then(response => res.send(response));
      }
    },
    function(err) {
      res.status(400).send(err);
    })
    .then(
      function (user) {
        if(user) {
          req.login(user, function (err) {
            if(err) {
              res.status(400).send(err);
            } else {
              res.json(user);
            }
          });
        }
      },
      function(err){
        res.status(400).send(err);
      }
    );
});

// app.post('/api/login', passport.authenticate("local"), (req, res) => {
//   res.send(res.json(req.user));
// });
// app.get('/api/logout', (req, res) => {
//   req.logout()
// })
app.get('/api/loggedin', (req, res) => {
  res.send(req.isAuthenticated() ? req.user : '0');
})
app.listen(3002);
