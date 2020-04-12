import React, { Component } from 'react';
import { allProds } from './../../../services/ProductServices';
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
    allProds(this.retreiveAllProds.bind(this));
  }


  render() {
    return (
      <div id="allProds">
        {
          this.state.allProducts.map((product, i) => (
            <div class="prods" key={i}>
              <img src={product.imageURL} className="AllProdsImages"></img>
              <h5>{product.title}</h5>
              <p>{product.description}</p>
            </div>
          ))
        }
      </div>
    )
  }
}

export default AllProds;