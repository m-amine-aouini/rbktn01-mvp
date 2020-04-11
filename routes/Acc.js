const mongoose = require('mongoose');
const Seller = mongoose.model('Seller');

module.exports = (app) => {

  app.post('/signup/seller', async (req, res) => {
    // console.log(req.body)
    let newSeller = new Seller(req.body)
    newSeller.save();
    res.send({ results: req.body });
    res.end();
  })

  // app.post('/signin/seller')
}