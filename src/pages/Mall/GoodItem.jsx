import React from "react";
import { Link } from "react-router-dom";
import "./GoodItem.less";

export default props => {
  const { list } = props;
  const {
    id,
    list_img,
    stock_count,
    title,
    yiya_price,
    price,
    size,
    user_count
  } = list;
  const isStock = stock_count <= 0;
  return (
    <Link to={`/mall/product-detail/${id}`} key={id} className="product-item">
      <div className="img">
        <img src={list_img} alt="" className={isStock ? "bg" : ""} />
        {isStock ? (
          <div className="over">
            <img src={require("./images/over.png")} alt="" />
          </div>
        ) : (
          ""
        )}
      </div>
      <p className="name fz16">{title}</p>
      <p className="price">
        <span className="fz16">{"￥" + parseInt(yiya_price)}</span>
        <span>{"￥" + parseInt(price)}</span>
      </p>
      <p className="size">
        <span className="sispan">{size}</span>
        <span className="pop">{user_count}人气</span>
      </p>
    </Link>
  );
};
