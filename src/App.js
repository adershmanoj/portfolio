import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Transition, TransitionGroup,CSSTransition } from "react-transition-group";

import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Skills from "./Pages/Skills";

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/projects', name: 'Projects', Component: Work },
  { path: '/skills', name: 'Skills', Component: Skills }
]

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav routes={routes}/>
        {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={500}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
      </div>
    </BrowserRouter>
  );
}

export default App;
