import React, { Component } from "react";
import { Carousel, Tabs } from "antd-mobile";
import { Link, Route } from "react-router-dom";
import LoadAble from "component/Loading";
import { dateTool } from "utils/tools";
import NewsItem from "component/NewsItem";
import "./index.less";

const tabs = [
  {
    title: "展览"
  },
  {
    title: "资讯"
  }
];
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: [
        {
          id: 15,
          img: "https://images.yiya.art/banner/153.jpg",
          places: "news",
          url: "http://m.yiya.art/home/newdetail/5"
        },
        {
          id: 16,
          img:
            "https://images.yiya.art/banner/b9f32d725d6640904ac15efe71719336.jpg",
          places: "news",
          url: "http://m.yiya.art/home/newdetail/4"
        },
        {
          id: 17,
          img:
            "https://images.yiya.art/banner/9a78aeffd5067f23bc7dd976d6f36262.jpg",
          places: "news",
          url: "http://m.yiya.art/home/newdetail/6"
        }
      ],
      infos: [
        {
          can_join: 0,
          content: "this is contnet",
          created_at: "2020-01-02 15:45:17",
          id: 9,
          img: "https://images.yiya.art/Information/何家英.jpg",
          platform: "易雅艺术平台",
          share_count: 2,
          title: "何家英：孤独是艺术家最大的财富 | 易雅·美术人物志",
          type: 1,
          updated_at: "2020-01-16 15:07:30",
          view_count: 45
        }
      ],
      shows: [
        {
          can_join: 0,
          content: "this is content",
          created_at: "2020-01-03 19:01:13",
          id: 12,
          img:
            "https://images.yiya.art/Information/d6c0e01af12ee64d0fdd95a08b66acd8.jpg",
          platform: "易雅艺术平台",
          share_count: 0,
          title: "国家博物馆“屹立东方——馆藏经典美术作品展”火热展出！",
          type: 2,
          updated_at: "2020-01-16 18:30:59",
          view_count: 19
        }
      ],
      tabIndex: 0
    };
  }
  setTab = index => {
    this.setState({
      tabIndex: index
    });
  };
  componentDidMount() {
    console.log(`00000---------------`);
  }
  render() {
    const { tabIndex, banner, shows, infos } = this.state;
    const lists = tabIndex === 0 ? shows : infos;
    return (
      <div className="news">
        {/* banner */}
        <Carousel autoplay infinite autoplayInterval={4000}>
          {banner.map(val => (
            <Link
              key={val.id}
              to={"/home/news/" + val.url.split("/").reverse()[0]}
              className="banner"
            >
              <img
                src={val.img}
                alt=""
                style={{ width: "100%", height: "100%", verticalAlign: "top" }}
              />
            </Link>
          ))}
        </Carousel>

        {/* banner */}
        <div style={{ minHeight: 0, maxHeight: "auto" }}>
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
            <div className="listCont">
              {lists.map(list => (
                <NewsItem key={list.id} list={list} href={"/home/news"} />
              ))}
            </div>
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
