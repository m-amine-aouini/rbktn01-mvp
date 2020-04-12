let axios = require('axios');

module.exports = {
  postProd: async (data, onMade) => {
    axios.post('http://localhost:1019/postProduct', data)
      .then(res => {
        console.log(res)
        onMade()
      })
      .catch(err => console.log(err))
  },

  sellerProds: async (id, extractProds) => {
    axios.get(`http://localhost:1019/sellerProducts/${id}`)
      .then(res => {
        console.log(res)
        let { results } = res.data;
        extractProds(results);
      })
      .catch(err => console.log(err))
  }
}