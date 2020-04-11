import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class SellerPorducts extends Component {
  render() {
    return (
      <div>
        <Link to='/makeProduct'>Add Product</Link>
      </div>
    )
  }
}

export default SellerPorducts;