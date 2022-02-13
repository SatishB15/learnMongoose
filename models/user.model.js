const mongoose = require('mongoose');

const UsesrSchema = new mongoose.Schema({
  Id: Number,
  email: String,
  first_name: String,
  last_name: String,
  contact: Number,
  gender: Boolean,
  dob: Date,
});
module.exports = mongoose.model('UserRecords', UsesrSchema);
