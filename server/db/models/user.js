const mongoose = require('mongoose');
mongoose.Promise = Promise;

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  IP: String,
  category: String
});

module.exports = mongoose.model('User', userSchema);