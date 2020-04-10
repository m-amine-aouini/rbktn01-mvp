let axios = require('axios');

module.exports = {
  signUp: (data) => {
    axios.post('/signup', data)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }
}