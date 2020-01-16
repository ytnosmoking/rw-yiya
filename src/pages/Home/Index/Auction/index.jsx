import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, Badge } from "antd-mobile";
import { dateDiff, dateTool } from "utils/tools";
import Title from "../Title";
import "./index.less";
const DOING = "竞拍中";
const SHOW = "预展中";
const OVER = "已结束";
const TEXT = ["竞拍中", "预展中", "已结束"];
const icon_people = require("../img/people.png");
const icon_hammer = require("../img/hammer-small.png");
const icon_coin = require("../img/coin.png");
const linkArr = [
  "/auction/biddinglist/",
  "/auction/previewlist/",
  "/auction/overlist/"
];
const IconTips = ({ src, txt }) => (
  <dd>
    <img src={src} alt="" />
    {txt}
  </dd>
);
const tabs = list => [
  { title: <Badge text={list[0].length}>{DOING}</Badge> },
  { title: <Badge text={list[1].length}>{SHOW}</Badge> },
  { title: <Badge text={list[2].length}>{OVER}</Badge> }
];
export default props => {
  const { title, list } = props;
  const [tab, setTab] = useState(0);
  const auctions = [list[DOING], list[SHOW], list[OVER]];

  return (
    <React.Fragment>
      {/* <div className="auction">*/}
      <Title {...title} />
      <div style={{ minHeight: 0, maxHeight: "auto" }}>
        <Tabs
          tabs={tabs(auctions)}
          tabBarBackgroundColor="none"
          tabBarActiveTextColor="red"
          tabBarTextStyle={{ fontSize: "16px" }}
          tabBarUnderlineStyle={{
            borderColor: "red",
            width: "10%",
            left:
              (tab / tabs(auctions).length +
                1 / (tabs(auctions).length * tabs(auctions).length)) *
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
              // <React.Fragment key={index}>
              <Link to={linkArr[tab] + item.id} key={item.id}>
                <div className="product">
                  <div className="img">
                    <img
                      width="100%"
                      height="100%"
                      src={item.play_img}
                      alt=""
                    />
                  </div>
                  <h6 className="title">{item.name || item.title}</h6>
                  <p className="time fz12">
                    {dateTool(item.start_time)} --- {dateTool(item.end_time)}
                  </p>
                  <dl>
                    <IconTips src={icon_people} txt={item.user_count + "人"} />
                    <IconTips
                      src={icon_hammer}
                      txt={item.auction_count + "次"}
                    />
                    <IconTips
                      src={icon_coin}
                      txt={item.auction_price_count + "元"}
                    />
                  </dl>
                  <div
                    className={tab === 0 ? "end-time" : `end-time noTime${tab}`}
                  >
                    <p>{TEXT[tab]}</p>
                    {tab === 0 ? (
                      <p className="endtime">{dateDiff(null, item.end_time)}</p>
                    ) : (
                      ""
                    )}
                  </div>
                  {/* </React.Fragment> */}
                </div>
              </Link>
            ))}
          </div>
        </Tabs>
      </div>
    </React.Fragment>
  );
};
