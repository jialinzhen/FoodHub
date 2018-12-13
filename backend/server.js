var express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
require('./data')();
const Commentdao = require('../backend/FoodHubbackenddao/Comments.dao.server');
const Recipedao = require('../backend/FoodHubbackenddao/Recipe.dao.server');
const Userdao = require('../backend/FoodHubbackenddao/User.dao.server');
app.post('/api/addrecipe', (req, res) => {
  Recipedao.createSingleRecipe(req.body).then(recipe => res.send(recipe));
});
app.get('/api/allrecipe', (req, res) => {
  Recipedao.fetchAllRecipe().then(response => res.send(response));
});
app.get('/api/foods/:id', (req, res) => {
  Recipedao.fetchOneRecipe(req.params.id).then(response => res.send(response));
});
app.put('/api/foods/:id', (req, res) => {
  Recipedao.fetchOneRecipeAndUpdate(req.params.id, req.body).then(response => res.send(response))
})
app.delete('/api/foods/:id', (req, res) => {
  Recipedao.fetchOneRecipeAndDelete(req.params.id).then((response) =>
    Commentdao.DeleteAllCommentForThePost(req.params.id)).then(response => res.send(response));
})
app.post('/api/foods/:id/comment', (req, res) => {
  Commentdao.createComment(req.params.id, req.body).then(commentObject =>
    Recipedao.AddCommentToTheRecipe(req.params.id, commentObject)).then(response => res.send(response));
});
app.get('/api/foods/:id/comment/:commentid', (req, res) => {
  Commentdao.FetchOneCommentById(req.params.commentid).then(response => res.send(response));
})
app.put('/api/foods/:id/comment/:commentid', (req, res) => {
  Commentdao.UpdateOneCommentForAPost(req.params.commentid, req.body).then(response => res.send(response));
})
app.delete('/api/foods/:id/comment/:commentid', (req, res) => {
  Commentdao.DeleteOneCommentForAPost(req.params.commentid).then(response => {
    Recipedao.DeleteACommentInAPost(req.params.id, req.params.commentid)
  }).then(response => res.send(response))
})
app.listen(3002);
