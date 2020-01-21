import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import { Sticky } from "react-sticky";
import { Carousel, Tabs, ListView, Toast } from "antd-mobile";
// eslint-disable-next-line no-unused-vars
import { Link, Route } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import LoadAble from "component/Loading";
// eslint-disable-next-line no-unused-vars
import { dateTool } from "utils/tools";

import NewsItem from "component/NewsItem";
import "./index.less";
import { newsInfo } from "./data";
const dataSource = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2
});
const tabs = [
  {
    title: "展览"
  },
  {
    title: "资讯"
  }
];

const { banner, infos, shows } = newsInfo;
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner,
      infos,
      shows,
      dataSource: dataSource.cloneWithRows([]),
      tabIndex: 0,
      isLoading: false
    };
  }
  setTab = index => {
    const { infos, shows } = this.state;
    const data = index === 0 ? shows.data : infos.data;
    this.setState({
      tabIndex: index,
      dataSource: dataSource.cloneWithRows(data)
    });
  };
  onEndReached = e => {
    console.log("end");
    const { infos, shows, tabIndex, isLoading } = this.state;
    if (isLoading) {
      return;
    }

    const defaultData = tabIndex === 0 ? shows : infos;
    const { current_page, last_page } = defaultData;
    // mock
    this.setState(
      preState => ({
        shows: {
          ...preState.shows,
          data: [...preState.shows.data, ...preState.infos.data]
        }
      }),
      () => {
        const data = tabIndex === 0 ? shows.data : infos.data;
        this.setState({
          dataSource: dataSource.cloneWithRows(data)
        });
      }
    );
    if (current_page < last_page) {
      // 加载数据去
    }
    Toast.info("没有更多数据了");
    setTimeout(() => {
      Toast.hide();
    }, 1000);
  };
  componentDidMount() {
    const { shows } = this.state;
    const data = shows.data;
    this.setState({
      dataSource: dataSource.cloneWithRows(data)
    });
    console.log(this.refs.news);
    const dom = this.refs.news;
    dom.addEventListener(
      "touchmove",
      function(e) {
        // e.preventDefault();
        e.stopPropagation();
      },
      {
        passive: false //  禁止 passive 效果
      }
    );
  }
  renderRow = (list, href) => {
    return (
      <Link to={`${href}/${list.id}`} className="newsItem">
        <NewsItem list={list} />
      </Link>
    );
  };
  render() {
    const { banner, dataSource } = this.state;
    return (
      <div className="news" ref="news">
        {/* banner */}

        <Carousel autoplay infinite autoplayInterval={4000}>
          {banner.map(val => (
            <Link
              key={val.id}
              to={"/home/news/" + val.url.split("/").reverse()[0]}
              className="banner"
              onTouchMove={e => {
                console.log(e);
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <img
                src={val.img}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  verticalAlign: "top"
                }}
              />
            </Link>
          ))}
        </Carousel>

        <div style={{ height: "auto" }}>
          <Tabs
            tabs={tabs}
            tabBarBackgroundColor="none"
            tabBarActiveTextColor="red"
            tabBarTextStyle={{ fontSize: "16px" }}
            tabBarUnderlineStyle={{ borderColor: "red" }}
            initialPage={0}
            onChange={(tab, index) => {
              this.setTab(index);
            }}
            onTabClick={(tab, index) => {
              this.setTab(index);
            }}
          >
            <ListView
              ref={el => (this.lv = el)}
              dataSource={dataSource}
              renderRow={list => {
                return (
                  <Link
                    to={`/home/news/${list.id}`}
                    key={list.id}
                    className="newsItem"
                  >
                    <NewsItem list={list} />
                  </Link>
                );
              }}
              className="listView"
              pageSize={5}
              scrollRenderAheadDistance={100}
              onEndReached={this.onEndReached}
              onEndReachedThreshold={10}
            />
          </Tabs>
        </div>

        <Route
          exact
          path="/home/news/:id"
          component={LoadAble("Home/News/Detail")}
        />
      </div>
    );
  }
}

export default index;
