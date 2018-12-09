module.exports = function() {
  const mongoose = require("mongoose");
  mongoose.connect("mongodb://localhost:27017/OwnMEANForumDB", { useNewUrlParser: true })
}
