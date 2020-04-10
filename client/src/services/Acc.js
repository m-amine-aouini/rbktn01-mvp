let axios = require('axios');

module.exports = {
  signUp: (data) => {
    axios.post('http://localhost:1019/signup/seller', data)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }
}