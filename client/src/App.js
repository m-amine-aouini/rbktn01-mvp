import React from 'react';
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
import MakeP from './components/products/prodsComponents/makeProduct'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <div>products for sale</div>
          </Route>
          <Route exact path="/myProducts">
            {!sessionStorage.getItem('_id') ? <OpenAcc /> : <SellerProducts />}
          </Route>
          <Route exact path="/makeProduct">
            {!sessionStorage.getItem('_id') ? <OpenAcc /> : <MakeP />}
          </Route>
          <Route exact path="/accessAcc">
            {!sessionStorage.getItem('_id') ? <OpenAcc /> : <Redirect to="/myProducts" />}

          </Route>
          <Route path="*">
            <div>This path is not found</div>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
