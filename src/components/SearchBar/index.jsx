import React from "react";
import "./index.less";
const logo = require("./logo.png");
const search = require("./search.png");

export default ({ type, history }) => {
  return (
    <div className="searchBar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div
        className="input"
        onClick={() => {
          console.log(history);
          console.log(type);
          history.push(type === 2 ? `/mall/search` : `/artist/search`);
        }}
      >
        <img src={search} alt="" />
        <input
          type="text"
          placeholder={type === 1 ? "输入心仪艺术家姓名搜索" : "搜索商品"}
        />
      </div>
    </div>
  );
};
