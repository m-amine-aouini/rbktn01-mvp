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

  componentWillMount() {
    sellerProds(localStorage.getItem('_id'), this.sellerProds.bind(this));
  }

  render() {
    return (
      <div id="sellerProds">
        {
          this.state.products.map((product, i) => (
            <div className="prods" key={i}>
              <img src={product.imageURL} className="SProdsImages"></img>
              <h5>{product.title}</h5>
              <p>{product.description}</p>
            </div>
          ))
        }
      </div>
    )
  }
}

export default SellerProducts;