const mongoose = require("mongoose");
const AnswerSchema = require('../models/Answer.schema.server');
const PostModel = require('../models/Post.schema.server');
const AnswerModel = mongoose.model('AnswerModel', AnswerSchema);
const Postdao = require('./Post.dao.server');

CreateComment = (id, comment) => {
  return AnswerModel.create({
    User: comment.User,
    Content: comment.Content
  }).then((commentobj) => Postdao.AddCommentForPost(id, commentobj));
};
FetchAllComment = (id, comment) => {
  AnswerModel.find().exec();
}
module.exports = {
  CreateComment,
  FetchAllComment
}


