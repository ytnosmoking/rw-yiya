import React, { Component } from "react";
import { Carousel, Grid } from "antd-mobile";
import { Link } from "react-router-dom";
import ArtistLine from "./ArtistLine";
import SingleRecomend from "./SingleRecomend";
import "./index.less";

const gridLinks = [
  {
    name: "0元领画",
    icon: require("./img/zero.png"),
    link: "/home/free"
  },
  {
    name: "商城",
    icon: require("./img/store.png"),
    link: "/mall"
  },
  {
    name: "拍卖",
    icon: require("./img/auction.png"),
    link: "/auction"
  },
  {
    name: "会员开办",
    icon: require("./img/vip.png"),
    link: "/plus/open"
  },
  {
    name: "直播",
    icon: require("./img/live.png"),
    link: "/auction/live-list"
  },
  {
    name: "艺术家",
    icon: require("./img/airtist.png"),
    link: "/artist"
  },
  {
    name: "积分商城",
    icon: require("./img/score.png"),
    link: "/score-mall"
  },
  {
    name: "艺闻趣事",
    icon: require("./img/news.png"),
    link: "/home/news"
  }
];
const msgsList = [
  {
    content: "测试数据11111",
    id: 1,
    places: "index,mall,auction,score",
    show: 1,
    title: "测试数据11111"
  },
  {
    content: "测试数据22222222",
    id: 2,
    places: "index,mall,auction,score",
    show: 1,
    title: "测试数据22222222"
  }
];
const recomend = {
  id: 1,
  img:
    "https://yiya100.oss-cn-beijing.aliyuncs.com/images/47dede2d7159827ffbf8f9cc49de7662.png",
  live_time: "2019-12-13 00:00:00",
  title: "主页直播"
};
const singleList = [
  {
    end_time: "2019-12-22 22:30:00",
    id: 13,
    list_img: "https://yiya100.oss-cn-beijing.aliyuncs.com/images/IMG_2872.JPG",
    price_now: "12000.00",
    publish_status: 1,
    start_time: "2019-12-21 10:00:00",
    status: 0,
    title: "娄建国《报春早》"
  },
  {
    end_time: "2019-12-22 22:30:00",
    id: 14,
    list_img: "https://yiya100.oss-cn-beijing.aliyuncs.com/images/IMG_2876.JPG",
    price_now: "8000.00",
    publish_status: 1,
    start_time: "2019-12-21 10:00:00",
    status: 2,
    title: "李东 大幅《兰亭雅集图》"
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["1", "2", "3"],
      imgHeight: 176
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: [
          "AiyWuByWklrrUDlFignR",
          "TekJlZRVCjLFexlOCuWn",
          "IJOtIlfsYdTyaDTRVrLI"
        ]
      });
    }, 100);
  }
  render() {
    return (
      <div>
        {/* banner */}
        <Carousel autoplay infinite autoplayInterval={4000}>
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: "inline-block",
                width: "100%",
                height: this.state.imgHeight
              }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: "100%", height: "100%", verticalAlign: "top" }}
              />
            </a>
          ))}
        </Carousel>
        {/* ad */}
        <Link to="/home/check-in" className="ad">
          <img src={require("./img/check-in.png")} alt="" />
        </Link>
        {/* Grid */}
        <Grid
          data={gridLinks}
          hasLine={false}
          className="grid"
          renderItem={link => (
            <Link to={link.link}>
              <div className="grid-icon">
                <img src={link.icon} alt="" />
              </div>
              <div>
                <span className="fz12">{link.name}</span>
              </div>
            </Link>
          )}
        />
        {/* scroll Msgs */}
        <div className="msgs">
          <div className="msgs-icon">
            <img src={require("./img/headline.png")} alt="" />
          </div>
          <Carousel
            className="msgs-list"
            vertical
            dots={false}
            dragging={false}
            swiping={false}
            autoplay={true}
            infinite
            speed={300}
            autoplayInterval={2000}
            resetAutoplay={false}
          >
            {msgsList.map((item, index) => (
              <div key={index}>
                {item.content && item.show === 1 ? (
                  <Link className="msg" to={`/home/toplinedetail/${item.id}`}>
                    {item.title}
                  </Link>
                ) : (
                  <p>{item.title}</p>
                )}
              </div>
            ))}
          </Carousel>
          <Link className="more" to="/home/news">
            更多
          </Link>
        </div>
        {/* artist online */}
        <ArtistLine
          title={{
            img: require("./img/live-title.png"),
            title: "艺术直播",
            link: "/auction/live-list"
          }}
          recomend={recomend}
        />
        {/* single recomend */}
        <SingleRecomend
          title={{
            img: require("./img/single.png"),
            title: "单品推荐",
            link: "/home/single-recommend"
          }}
          recomend={singleList}
        />
      </div>
    );
  }
}

export default Home;
