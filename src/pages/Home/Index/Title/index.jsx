import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

export default (props = {}) => {
  const { img, title, link } = props;
  return (
    <div className="title">
      <div className="title-name">
        <div>
          <img src={img} alt="" />
        </div>
        {title}
      </div>
      <Link to={link}>查看更多></Link>
    </div>
  );
};
