const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = (app) => {
  app.post('/postProduct', async (req, res) => {
    let newProduct = new Product(req.body)
    await newProduct.save()
    res.send({ results: 'handled post product request' });
    res.end();
  })

  app.get('/sellerProducts/:seller_id', async (req, res) => {
    let { seller_id } = req.params;
    Product.find({ seller_id }, async (err, results) => {
      if (err) throw err;
      res.send({ results });
      res.end();
    })
  })
}