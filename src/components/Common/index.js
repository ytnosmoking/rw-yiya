import React from "react";
import { Link } from "react-router-dom";
import { MsgBanner } from "component/Banner";
import "./index.less";
export const BottomBord = params => {
  return <div className="bb"></div>;
};

export const SubTitle = params => {
  const { title, link, desc } = params
  return <div className="sub-title ">
    <div className="title fz16">{title}</div>
    {link ? <Link to={link.to} className="link fz16" >
      {link.title}
    </Link> : null}
    {desc ? <div className="desc fz14">{desc}</div> : null}
  </div>
}

export const MsgList = (props) => {
  const { icon, list, link, iconClass } = props
  return (
    <div className="msgs">
      <div className={`msgs-icon ${iconClass ? 'active' : ''}`}>
        <img src={icon} alt="" />
      </div>
      <div className="msgs-list">
        <MsgBanner list={list} />
      </div>
      {link ? <Link className="more" to={link}>
        更多
      </Link> : ''}
    </div>
  );
};

