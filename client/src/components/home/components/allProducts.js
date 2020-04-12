import React, { Component } from 'react';

class AllProds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: []
    }
  }

  allProds(data) {
    this.setState({ allProducts: data });
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}