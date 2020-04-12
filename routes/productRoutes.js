const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = (app) => {
  app.post('/postProduct', async (req, res) => {
    let newProduct = new Product(req.body)
    await newProduct.save()
    res.send({ results: 'handled post product request' });
    res.end();
  })
}