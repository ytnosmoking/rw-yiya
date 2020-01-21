import React, { Component } from "react";
import "./index.less";
import NewsItem from "component/NewsItem";
import { data } from "./data";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }
  render() {
    return (
      <div className="detail">
        <NewsItem list={{ ...this.state.data, img: null }} />
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: this.state.data.content }}
        />
      </div>
    );
  }
}

export default index;
