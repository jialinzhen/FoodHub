const mongoose = require("mongoose");
const FollowSchema = mongoose.Schema({
  Follower: String,
  Followee: String
}, {collection: "Follow"});

module.exports = FollowSchema;
