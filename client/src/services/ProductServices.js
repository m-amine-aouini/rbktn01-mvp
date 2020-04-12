let axios = require('axios');

module.exports = {
  postProd: async (data, onMade) => {
    axios.post('http://localhost:1019/postProduct', data)
      .then(res => {
        onMade()
      })
      .catch(err => console.log(err))
  },

  sellerProds: async (id, extractSellerProds) => {
    axios.get(`http://localhost:1019/sellerProducts/${id}`)
      .then(res => {
        let { results } = res.data;
        extractSellerProds(results);
      })
      .catch(err => console.log(err))
  },

  allProds: async (extractAllProds) => {
    axios.get(`http://localhost:1019/allProducts`)
      .then(res => {
        let { results } = res.data;
        extractAllProds(results);
      })
      .catch(err => console.log(err))
  }
}