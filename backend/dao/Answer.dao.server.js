const mongoose = require("mongoose");
const AnswerSchema = require('../models/Answer.schema.server');
const PostModel = require('../models/Post.schema.server');
const AnswerModel = mongoose.model('AnswerModel', AnswerSchema);
const Postdao = require('./Post.dao.server');

CreateComment = (id, comment) => {return AnswerModel.create({
  User: comment.User,
  Content: comment.Content
}, function (comment, id) {
  Postdao.AddCommentForPost(id, comment);
})};

module.exports = {
  CreateComment
}

// CreateCommentForPost = (postid, comment) => {
//   PostModel.findById(postid, function (err, post) {
//     if(err) {
//       console.log(err);
//     } else {
//       AnswerModel.create({
//         User: "asdasd",
//         Content: comment.Content,
//         Reply: []
//       }, function(err, comment) {
//           if(err) {
//             console.log(err);
//           } else {
//             PostModel.comments.push(comment);
//             comment.User = "5c09f1fee237de0e8d83ce42"
//           }
//       })
//     }
//   })
// };
