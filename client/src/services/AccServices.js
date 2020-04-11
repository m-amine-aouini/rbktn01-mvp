let axios = require('axios');

module.exports = {
  signUp: async (data) => {
    axios.post('http://localhost:1019/signup/seller', data)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  },
  signIn: async (data) => {
    axios.post('http://localhost:1019/signin/seller', data)
      .then(res => {
        console.log(res)
        let id = res.data.results;

        sessionStorage.setItem('_id', id);

      })
      .catch(err => console.log(err))
  }
}