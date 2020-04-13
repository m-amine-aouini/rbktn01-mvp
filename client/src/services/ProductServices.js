let axios = require('axios');

export default {
  postProd: async (data, onMade) => {
    // axios.post('http://localhost:1019/postProduct', data)
      axios.post('/postProduct', data)
      .then(res => {
        onMade()
      })
      .catch(err => console.log(err))
  },

  sellerProds: async (id, extractSellerProds) => {
    // axios.get(`http://localhost:1019/sellerProducts/${id}`)
      axios.get(`/sellerProducts/${id}`)
      .then(res => {
        let { results } = res.data;
        extractSellerProds(results);
      })
      .catch(err => console.log(err))
  },

  allProds: async (extractAllProds) => {
    // axios.get(`http://localhost:1019/allProducts`)
      axios.get(`/allProducts`)
      .then(res => {
        let { results } = res.data;
        extractAllProds(results);
      })
      .catch(err => console.log(err))
  }
}