const mongoose = require('mongoose');
const { Schema } = mongoose
const sellerSchema = new Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true },
  password: String,
  country: String,
  county: String,
  gender: String
})

mongoose.model('Seller', sellerSchema)

