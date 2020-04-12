import React, { Component } from 'react';
import { sellerProds } from './../../../services/ProductServices'
class SellerProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  sellerProds(data) {
    this.setState({ products: data })
  }

  componentDidMount() {
    sellerProds(localStorage.getItem('_id'), this.sellerProds.bind(this));
  }

  render() {
    return (
      <div id="sellerProds">

      </div>
    )
  }
}

export default SellerProducts;