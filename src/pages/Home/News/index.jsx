import React, { Component } from "react";
import "./index.less";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(`00000---------------`);
  }
  render() {
    return <div className="news">this is Home News</div>;
  }
}

export default index;
