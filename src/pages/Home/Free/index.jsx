import React, { Component } from "react";
import { Tabs } from "antd-mobile";
import { Link } from "react-router-dom";
import "./index.less";
const tabs = [
  {
    title: "新客0元专享"
  },
  {
    title: "2000元赠送专区"
  }
];
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowIndex: 0,
      conData: [
        [
          {
            title: "新客限时0元专区",
            img: require("./images/free-img2.png"),
            url: "/mall/zone?range=free"
          },
          {
            title: "新客限时5折专区",
            img: require("./images/free-img1.png"),
            url: "/mall/zone?range=flash_sale"
          }
        ],
        [
          {
            title: "2000元书画作品免费领取专区",
            img: require("./images/free-img3.png"),
            url: "/mall/zone?range=limit"
          },
          {
            title: "PLUS会员艺术品专区",
            img: require("./images/free-img4.png"),
            url: "/mall/zone?range=plus"
          }
        ]
      ]
    };
  }
  setTab = index => {
    this.setState({
      nowIndex: index
    });
  };
  render() {
    const { conData, nowIndex } = this.state;
    return (
      <div className="free">
        <Tabs
          tabs={tabs}
          initialPage={0}
          renderTabBar={props => {
            return (
              <div className="tab-cont">
                <Tabs.DefaultTabBar {...props} />
              </div>
            );
          }}
          tabBarUnderlineStyle={{ border: "none" }}
          tabBarActiveTextColor="#fff"
          tabBarInactiveTextColor="#d7561c"
          tabBarBackgroundColor=" #fff"
          onChange={(tab, index) => {
            console.log("onChange", index, tab);
            this.setTab(index);
          }}
          onTabClick={(tab, index) => {
            console.log("onTabClick", index, tab);
            this.setTab(index);
          }}
        >
          <div className="con-wrap">
            {conData[nowIndex].map(i => (
              <Link key={i.title} className="con-item" to={i.url ? i.url : ""}>
                <div className="hd">
                  <p>{i.title}</p>
                </div>
                <div className="img">
                  <img src={i.img} alt="" />
                </div>
              </Link>
            ))}
          </div>
        </Tabs>
      </div>
    );
  }
}

export default index;
