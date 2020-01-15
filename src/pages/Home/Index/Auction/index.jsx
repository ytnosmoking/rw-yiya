import React, { useState } from "react";
import { Tabs, Badge } from "antd-mobile";
import Title from "../Title";
import "./index.less";
const DOING = "竞拍中";
const SHOW = "预展中";
const OVER = "已结束";
const tabs = list => [
  { title: <Badge text={list[0].length}>{DOING}</Badge> },
  { title: <Badge text={list[1].length}>{SHOW}</Badge> },
  { title: <Badge text={list[2].length}>{OVER}</Badge> }
];
export default props => {
  const { title, list } = props;
  const [tab, setTab] = useState(0);
  const auctions = [list[DOING], list[SHOW], list[OVER]];

  console.log(auctions);
  console.log(tab);
  console.log(auctions.length);
  console.log(`${(tab / auctions.length) * 100} +%`);
  return (
    <React.Fragment>
      {/* <div className="auction">*/}
      <Title {...title} />
      <Tabs
        tabs={tabs(auctions)}
        tabBarBackgroundColor="none"
        tabBarActiveTextColor="red"
        tabBarTextStyle={{ fontSize: "16px" }}
        tabBarUnderlineStyle={{
          borderColor: "red",
          width: "10%",
          left:
            (tab / auctions.length + 1 / (auctions.length * auctions.length)) *
              100 +
            "%"
        }}
        initialPage={0}
        onChange={(tab, index) => {
          setTab(index);
          console.log("onChange", index, tab);
        }}
        onTabClick={(tab, index) => {
          setTab(index);
          console.log("onTabClick", index, tab);
        }}
      >
        <div>
          {auctions[tab].map((item, index) => (
            <React.Fragment key={index}>
              <img width="100%" src={item.play_img} alt="" />
              <h6 className="title">{item.name || item.title}</h6>
              <p className="time">
                {item.start_time} --- {item.end_time}
              </p>
              <dl>
                <dd>
                  <img src={require("../img/people.png")} alt="" />
                  {item.user_count}人
                </dd>
                <dd>
                  <img src={require("../img/hammer-small.png")} alt="" />
                  {item.auction_count}次
                </dd>
                <dd>
                  <img src={require("../img/coin.png")} alt="" />
                  {item.auction_price_count}元
                </dd>
              </dl>
              {/* <div className={productType === 0 ? 'end-time' : `end-time noTime${productType}`}>
              <TypeHtml productType={productType}></TypeHtml>
              {productType === 0 ? <p className='endtime'>{Tool.dateDiff(null, item.end_time)}</p> : ''}
            </div> */}
            </React.Fragment>
          ))}
        </div>
      </Tabs>
    </React.Fragment>
  );
};
