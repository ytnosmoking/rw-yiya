import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, Switch, Redirect } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import LoadAble from 'component/Loading'
import NavBar from 'component/NavBar'
const routes = [
  {
    path: "/home",
    view: LoadAble('Home/Index')
  },
  {
    path: "/auction",
    view: LoadAble('Auction')
  },
  {
    path: "/mall",
    view: LoadAble('Mall')
  },
  {
    path: "/score",
    view: LoadAble('Score')
  },
  {
    path: "/mine",
    view: LoadAble('Mine')
  }
]



function App() {
  return (
    <React.Fragment>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            component={route.view}
          ></Route>
        ))}
        {/* <Redirect from="*" to="/home"></Redirect> */}

      </Switch>
      <NavBar />
    </React.Fragment>

  );
}

export default App;
