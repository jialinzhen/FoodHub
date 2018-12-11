const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    Name: String,
    Email: String,
    Password: String,
    Picture: String,
    Description: String,
    Credentials: String
}, {collection: "users"});

module.exports = UserSchema;


