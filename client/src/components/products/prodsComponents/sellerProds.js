import React, { Component } from 'react';
import productServices from './../../../services/ProductServices'
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
    productServices.sellerProds(localStorage.getItem('_id'), this.sellerProds.bind(this));
  }

  render() {
    return (
      <div className="displayProds" id="sellerProds">
        {
          this.state.products.map((product, i) => (
            <div className="prods" key={i}>
              <div className="styleProds">
                <img src={product.imageURL} className="SProdsImages"></img>
                <h4>{product.cost} DT</h4>
                <h5>{product.title}</h5>
                <p>{product.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default SellerProducts;