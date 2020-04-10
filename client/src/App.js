import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import OpenAcc from './components/openAcc/openAcc'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            {/* <OpenAcc /> */}
          </Route>
          <Route path="/about">
            <div>
              about
            </div>
          </Route>
          <Route path="/users">
            <div>users</div>

          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
