import React, { Component } from 'react';
import { signIn } from './../../services/AccServices'
class SellerSignin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.on_change = this.on_change.bind(this);
    this.onSignin = this.onSignin.bind(this);
  }

  on_change(e) {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  }

  onSignin(e) {
    e.preventDefault();
    let checkEmail = /@./;

    if (!checkEmail.test(this.state.email) || this.state.password.length < 8) {
      if (!checkEmail.test(this.state.email)) alert('Check your email you might written it wrong')
      if (this.state.password.length < 8) alert('the password the you wrote is bellow 8 characters')

    } else {
      signIn(this.state, this.props.logIn)


      console.log(this.state)
    }
  }

  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <form>
          <label for="email">Email:</label>
          <input name="email" id="emailIn" type="email" onChange={e => this.on_change(e)}></input><br></br>
          <label for="email">Password:</label>
          <input name="password" id="passwordIn" type="password" onChange={e => this.on_change(e)}></input><br></br>
          <button type="button" onClick={e => this.onSignin(e)}>Sign In</button>
        </form>
      </div>
    )
  }
}

export default SellerSignin;