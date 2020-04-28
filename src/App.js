import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,  
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
        </Route>
        <Route path="/topics">
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router> 
  );
}

export default App;
