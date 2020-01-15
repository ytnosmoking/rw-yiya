import React from "react";
import Title from "../Title";
import { Link } from "react-router-dom";
import "./index.less";
const statusText = {
  0: "预展中",
  1: "预展中",
  2: "竞拍中",
  3: "拍卖结束"
};
const statusClass = {
  0: "blue",
  1: "blue",
  3: "over"
};

export default (props = {}) => {
  const { title, recomend } = props;
  return (
    <React.Fragment>
      <Title {...title} />
      <div className="single-recomend">
        {recomend.map((item, index) => {
          const { status, list_img, title, price_now, start_price, id } = item;
          return (
            <Link key={index} to={{ pathname: `/auction/detail/${id}` }}>
              <div className="img">
                <img src={list_img} alt="" />
              </div>
              <h6>{title}</h6>
              <span className={statusClass[status]}>{statusText[status]}</span>
              <p className={status === 2 ? "" : statusClass[status]}>
                {[0, 1].includes(status) ? (
                  "_ _"
                ) : status === 2 ? (
                  <React.Fragment>
                    ￥{price_now || start_price}
                    <span>当前出价</span>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    ￥{price_now}
                    <span>最高出价</span>
                  </React.Fragment>
                )}
              </p>

              {/* 0 1 */}
              {/* <span className="blue">预展中</span>
            <p className="blue">_ _</p> */}
              {/* 2 */}
              {/* <span>竞拍中</span>
            <p>
              ￥{item.price_now || item.start_price}
              <span>当前出价</span>
            </p> */}
              {/* 3 */}
              {/* <span className="over">拍卖结束</span>
            <p>
              ￥{item.price_now}
              <span>最高出价</span>
            </p> */}
            </Link>
          );
        })}
      </div>
    </React.Fragment>
  );
};
