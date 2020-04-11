const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  product_id: String,
  title: String,
  description: String,
  cost: Number,
  imageURL: String,
  county: String
})

mongoose.model('Product', productSchema)