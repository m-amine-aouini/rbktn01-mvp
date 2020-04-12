const mongoose = require('mongoose');
const Seller = mongoose.model('Seller');

module.exports = (app) => {

  app.post('/signup/seller', async (req, res) => {
    // console.log(req.body)
    let newSeller = new Seller(req.body)
    await newSeller.save();
    res.send({ results: req.body });
    res.end();
  })

  app.post('/signin/seller', async (req, res) => {
    let { email, password } = req.body;

    let seller = await Seller.findOne({ email });

    if (!!seller) {
      if (password === seller.password) {
        res.send({ results: seller._id });
        res.end();
      } else {
        res.status(401).send({ results: "Password is wrong you might wrote it wrong" })
      }

    } else {
      res.status(404).send({ results: "Account is not found" })
    }
  })
}