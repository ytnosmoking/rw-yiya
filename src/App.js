import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import LoadAble from 'component/Loading'
import NavBar from 'component/NavBar'
import Home from 'pages/Home'
import Auction from 'pages/Auction'
import Mall from 'pages/Mall'
import Score from 'pages/Score'
import Mine from 'pages/Mine'
const routes = [
  {
    path: "/home",
    // view: LoadAble('Home')
    view: Home
  },
  {
    path: "/auction",
    // view: LoadAble('Auction')
    view: Auction
  },
  {
    path: "/mall",
    // view: LoadAble('Mall')
    view: Mall
  },
  {
    path: "/score",
    // view: LoadAble('Score')
    view: Score
  },
  {
    path: "/mine",
    // view: LoadAble('Mine')
    view: Mine
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
          // render={() => route.view}

          ></Route>
        ))}
        <Redirect from="*" to="/home"></Redirect>

      </Switch>
      <NavBar />
    </React.Fragment>

  );
}

export default App;
