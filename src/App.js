import React, { Suspense, useEffect } from "react";
import "./App.scss";
import lazy from "react-lazy-with-preload";
import { Route, useHistory } from "react-router-dom";
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
  let xStart,
    xMove = 0;
  const history = useHistory();
  const handleTouchStart = (event) => {
    xStart = event.nativeEvent.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    xMove = event.nativeEvent.touches[0].clientX;
  };
  const handleTouchEnd = (event, index) => {
    let routePath = null;
    if (xMove && xStart - xMove > 100) {
      routePath =
        index === routes.length - 1 ? routes[0].path : routes[index + 1].path;
    } else if (xMove && xMove - xStart > 100) {
      routePath =
        index === 0 ? routes[routes.length - 1].path : routes[index - 1].path;
    }
    xMove = xStart = 0;
    routePath && history.push(routePath);
    return;
  };

  useEffect(() => {
    //preload
    routes.map(({ Component }) => Component.preload());
  });
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <Nav routes={routes} />
        {routes.map(({ path, Component }, index) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={800}
                classNames="page"
                unmountOnExit
              >
                <div
                  className="page"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={(e) => handleTouchEnd(e, index)}
                >
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </Suspense>
  );
}

export default App;
