import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoadAble from "component/Loading";

class route extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <Switch>
        <Route exact path="/home" component={LoadAble("Home/Index")} />
        <Route exact path="/home/news" component={LoadAble("Home/News")} />
      </Switch>
    );
  }
}

export default route;
