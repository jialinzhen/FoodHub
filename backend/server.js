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
const Postdao = require('./dao/Post.dao.server');
const Answerdao = require('./dao/Answer.dao.server')
//Route Begins
app.post('/api/addpost', (req, res) => {
  Postdao.createSinglePost(
    '5c09f1fee237de0e8d83ce42',
    req.body.Title,
    req.body.Content,
    req.body.Image,
    req.body.Category)
    .then(post => res.send(post));
});
app.get('/api/getposts', (req, res) => {
  Postdao.FetchAllPosts().then(response => res.send(response));
});
app.get('/api/posts/:id', (req, res) => {
  const id = req.params.id;
  Postdao.FetchOnePost(id).then(response => res.send(response));
});
app.put('/api/posts/:id', (req, res) => {
  const id = req.params.id;
  const newPost = req.body;
  Postdao.UpdateOnePost(id, newPost).then(response => res.send(response));
})
app.delete('/api/posts/:id', (req, res) => {
  const id = req.params.id;
  Postdao.DeleteOnePost(id).then(response => res.send(response));
});
app.post('/api/posts/:id/comments', (req, res) => {
  // id of the post you add the comment to, body is the comment object
   Answerdao.CreateComment(req.params.id, req.body).then(comment => res.send(comment));
});

app.listen(3002);
