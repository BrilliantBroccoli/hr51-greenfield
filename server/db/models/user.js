const mongoose = require('mongoose');
mongoose.Promise = Promise;

const userSchema = new mongoose.Schema({
  IP: String,
  category: String
});

module.exports = mongoose.model('User', userSchema);