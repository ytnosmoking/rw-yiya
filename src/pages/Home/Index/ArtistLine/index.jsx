import React from "react";
import Title from "../Title";
import { Link } from "react-router-dom";
import "./index.less";

export default (props = {}) => {
  const { title, recomend } = props;
  return (
    <React.Fragment>
      <Title {...title} />
      <Link className="link" to={title.link}>
        <div className="record">
          <img src={recomend && recomend.img} alt="" />
          <div className="mask">
            <p>{recomend && recomend.title}</p>
            <p>{recomend && recomend.live_time}</p>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
};
