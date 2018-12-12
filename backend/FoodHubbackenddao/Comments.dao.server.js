const mongoose = require("mongoose");
const CommentSchema = require('../FoodHubbackendmodel/Comments.schema.server');
const CommentModel = mongoose.model('CommentModel', CommentSchema);
const Recipedao = require('./Recipe.dao.server')

createComment = (id, comment) => {
  return CommentModel.create({
    User: '5c116d490ae31552433fbc1b',
    Content: comment.Content,
    Rating: comment.Rating
  }).then(commentobj => {
    return Recipedao.AddCommentToThePost(id, commentobj);
  })
}
module.exports = {
  createComment
}

