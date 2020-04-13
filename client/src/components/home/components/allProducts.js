import React, { Component } from 'react';
import productServices from './../../../services/ProductServices';
class AllProds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: []
    }
  }

  retreiveAllProds(data) {
    this.setState({ allProducts: data });
  }

  componentWillMount() {
    productServices.allProds(this.retreiveAllProds.bind(this));
  }


  render() {
    return (
      <div className="displayProds" id="allProds">
        {
          this.state.allProducts.map((product, i) => (
            <div class="prods" key={i}>
              <div className="styleProds">
                <img src={product.imageURL} className="AllProdsImages"></img>
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

export default AllProds;