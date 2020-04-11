import React, { Component } from 'react';

class SellerSignin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.on_change = this.on_change.bind(this);
  }

  on_change(e) {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value });
  }

  onSignin(e) {
    e.preventDefault();
    let checkEmail = /@./;

    if (chackEmail.test(this.state.password) || this.state.password.length < 8) {
      if (chackEmail.test(this.state.password)) alert('Check your email you might written it wrong')
      if (this.state.password.length < 8) alert('the password the you wrote is bellow 8 characters')

    } else {

    }
  }

  render() {
    return (
      <div>
        <form>
          <label for="email">Email:</label>
          <input name="email" id="email" onchange={e => this.on_change(e)}></input>
          <label for="email">Password:</label>
          <input name="password" id="password" onchange={e => this.on_change(e)}></input>
          <button type="button">Sign In</button>
        </form>
      </div>
    )
  }
}

export default SellerSignin;