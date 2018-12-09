const mongoose = require("mongoose");
const userSchema = require('../models/User.schema.server');
const userModel = mongoose.model('UserModel', userSchema);

module.exports = {
    
}