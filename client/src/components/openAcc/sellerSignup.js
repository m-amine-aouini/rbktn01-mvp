import React, { Component } from 'react';
import { signUp } from './../../services/AccServices'
class SellerSignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: "",
      country: '',
      county: '',
      email: '',
      password: '',
      gender: ''
    }
    this.on_change = this.on_change.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault()
    let checkEmail = /@./

    if (this.state.firstname === '' ||
      this.state.lastname === '' ||
      this.state.password.length < 8 ||
      !checkEmail.test(this.state.email) ||
      this.state.gender === '') {
      if (this.state.password < 8) {
        if (this.state.password.length === 0) alert('Your password input is empty')
        else alert('Your password is too short !')
      }
      if (!checkEmail.test(this.state.email)) alert('Your Email is not real !')
      if (this.state.gender === "") alert('Choose your gender !')
      if (this.state.firstname === '' || this.state.lastname === "") alert('Your lastname or firstname is empty !')
    } else {

      console.log(this.state)
      signUp(this.state);
    }
  }

  on_change(e) {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form>
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="firstname" onChange={e => this.on_change(e)} ></input><br></br>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lastname" onChange={e => this.on_change(e)} ></input><br></br>
          <label for="lname">Email:</label>
          <input type="email" id="email" name="email" onChange={e => this.on_change(e)} ></input><br></br>
          <label for="password" >Password:</label>
          <input type="password" id="password" name="password" onChange={e => this.on_change(e)}></input><br></br>
          <label for="fname">Country:</label>
          <input type="text" id="country" name="country" onChange={e => this.on_change(e)} ></input><br></br>
          <label for="lname">County:</label>
          <input type="text" id="county" name="county" onChange={e => this.on_change(e)} ></input><br></br>
          <label for="gender">Gender:</label>
          <select id="gender" name="gender" onChange={e => this.on_change(e)}>
            <option name="gender" value="male">Male</option>
            <option name="gender" value="female">Female</option>
            <option name='gender' value="other">Other</option>
            <option name="default" value="" selected disabled>Choose</option>
          </select><br></br>
          <button type="submit" onClick={e => this.onSubmit(e)}>Submite</button>

        </form>
      </div>
    )
  }
}
export default SellerSignUp;