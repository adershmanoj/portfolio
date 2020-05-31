import React, { Suspense, useEffect } from "react";
import "./App.scss";
import lazy from "react-lazy-with-preload";
import { BrowserRouter, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Nav from "./Components/Nav";

let routes = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/projects", name: "Projects" },
  { path: "/skills", name: "Skills" },
  { path: "/experience", name: "Experience" },
];

routes.map(
  (route) => (route.Component = lazy(() => import(`./Pages/${route.name}`)))
);

function App() {
  useEffect(() => {
    //preload
    routes.map(({ Component }) => Component.preload());
  });
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <div className="App">
          <Nav routes={routes} />
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={800}
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
    </Suspense>
  );
}

export default App;
