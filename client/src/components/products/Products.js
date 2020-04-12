import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SellerProducts from './prodsComponents/sellerProds'
class SellerPorducts extends Component {
  render() {
    return (
      <div>
        <Link to='/makeProduct'>Add Product</Link>
        <SellerProducts />
      </div>
    )
  }
}

export default SellerPorducts;