import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AllProds from './components/allProducts';

class Home extends Component {

  render() {
    return (
      <div>
        <Link to="/accessAcc">Open seller acount</Link>
        <AllProds />
      </div>
    )
  }
}

export default Home;