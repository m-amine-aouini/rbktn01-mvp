import React, { Component } from 'react';
import SellerSignUp from './sellerSignup'
import SellerSignin from './sellerSignin';
import { Redirect } from 'react-router-dom'
class OpenAcc extends Component {
  render() {
    return (

      <div id="Seller">
        <div className="enterInput" id="Ssignup">
          <SellerSignUp />
        </div>
        <div className="enterInput" id="Ssignin">
          <SellerSignin />
        </div>

      </div>
    )
  }
}

export default OpenAcc;