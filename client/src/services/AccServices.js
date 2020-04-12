let axios = require('axios');

module.exports = {
  signUp: async (data) => {
    axios.post('http://localhost:1019/signup/seller', data)
      .then(res => {
        console.log('handeled signup request')
      })
      .catch(err => { throw err })
  },
  signIn: async (data, login) => {
    axios.post('http://localhost:1019/signin/seller', data)
      .then(res => {
        let id = res.data.results;
        localStorage.setItem('_id', id);
      })
      .then(() => { login() })
      .catch(err => { throw err })
  }
}