let axios = require('axios');

module.exports = {
  postProd: async (data, onMade) => {
    axios.post('http://localhost:1019/postProduct', data)
      .then(res => {
        console.log(res)
        onMade()
      })
      .catch(err => console.log(err))
  }
}