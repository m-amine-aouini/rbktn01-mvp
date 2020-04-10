const mongoose = require('mongoose');

const Client = mongoose.model('Client', {
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  country: String,
  county: String,
  gender: String
})