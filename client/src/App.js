import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import OpenAcc from './components/openAcc/openAcc';
import SellerProducts from './components/products/Products';
import MakeP from './components/products/prodsComponents/makeProduct';
import Home from './components/home/home';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }
  logIn() {
    this.setState({ loggedIn: true });
  }
  componentWillMount() {
    if (!!localStorage.getItem('_id')) { this.setState({ loggedIn: true }) }
  }
  render() {

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/myProducts">
              {!this.state.loggedIn ? (<OpenAcc logIn={this.logIn.bind(this)} />) : (<SellerProducts />)}
            </Route>
            <Route exact path="/makeProduct">
              {!this.state.loggedIn ? (<OpenAcc logIn={this.logIn.bind(this)} />) : (<MakeP />)}
            </Route>
            <Route exact path="/accessAcc">
              {!this.state.loggedIn ? (<OpenAcc logIn={this.logIn.bind(this)} />) : (<Redirect to="/myProducts" />)}

            </Route>
            <Route path="*">
              <div>This path is not found</div>
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }
}
export default App;
