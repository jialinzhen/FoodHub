const mongoose = require("mongoose");
const PostSchema = require('../models/Post.schema.server');
const PostModel = mongoose.model('PostModel', PostSchema);

createSinglePost = (UserId, Title, Content, Image, Category) =>
  PostModel.create({
    UserId: UserId,
    Title: Title,
    Content: Content,
    Image: Image,
    Category: Category
  });
FetchAllPosts = () => PostModel.find().exec();
FetchOnePost = (id) => PostModel.findById(id);
UpdateOnePost = (id, post) => PostModel.findByIdAndUpdate(id, post);
DeleteOnePost = (id) => PostModel.findByIdAndRemove(id);
AddCommentForPost = (id, comment) => {return PostModel.findById(id, function (post) {
  post.Comments.push(comment._id);
  post.save();
})};

module.exports = {
  createSinglePost,
  FetchAllPosts,
  FetchOnePost,
  DeleteOnePost,
  UpdateOnePost,
  AddCommentForPost
};
