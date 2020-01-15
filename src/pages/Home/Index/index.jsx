import React, { Component } from "react";
import { Carousel, Grid } from "antd-mobile";
import { Link, Route } from "react-router-dom";
import ArtistLine from "./ArtistLine";
import SingleRecomend from "./SingleRecomend";
import AuctionView from "./Auction";
import LoadAble from "component/Loading";
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
// eslint-disable-next-line no-unused-vars
const auctionList = {
  竞拍中: [
    {
      id: 17,
      user_id: 1,
      org_id: 0,
      title: "福运连年 | 众名家齐送福 名家书法专场",
      start_time: "2020-01-13 09:30:00",
      end_time: "2020-01-15 22:40:00",
      sort: 83,
      status: 4,
      play_img:
        "https://images.yiya.art/files/11643680ba0df3117aa3780ef4e84627.jpg",
      created_at: "2020-01-12 17:29:02",
      updated_at: "2020-01-15 17:15:54",
      auction_count: 27,
      auction_price_count: 8100,
      user_count: "2788"
    },
    {
      id: 18,
      user_id: 1,
      org_id: 0,
      title: "福运连年 | 众名家齐送福 名家书法专场",
      start_time: "2020-01-13 09:30:00",
      end_time: "2020-01-15 22:30:00",
      sort: 82,
      status: 4,
      play_img:
        "https://images.yiya.art/files/223dda08e585491133be146c752e0724.jpg",
      created_at: "2020-01-12 17:30:00",
      updated_at: "2020-01-15 17:15:54",
      auction_count: 103,
      auction_price_count: 31400,
      user_count: "4672"
    },
    {
      id: 19,
      user_id: 1,
      org_id: 0,
      title: "福运连年 | 众名家齐送福 名家书法专场",
      start_time: "2020-01-14 09:30:00",
      end_time: "2020-01-16 22:40:00",
      sort: 80,
      status: 4,
      play_img:
        "https://images.yiya.art/files/3d87bb6e6817765c8b9c9dfe414f2634.jpg",
      created_at: "2020-01-13 16:05:34",
      updated_at: "2020-01-15 17:15:54",
      auction_count: 19,
      auction_price_count: 4555,
      user_count: "2611"
    },
    {
      id: 20,
      user_id: 1,
      org_id: 0,
      title: "福运连年 | 众名家齐送福 名家书法专场",
      start_time: "2020-01-14 09:30:00",
      end_time: "2020-01-16 22:30:00",
      sort: 79,
      status: 4,
      play_img:
        "https://images.yiya.art/files/a19b6f6fdf52b31611c3901a79d8da93.jpg",
      created_at: "2020-01-13 18:59:22",
      updated_at: "2020-01-15 17:15:54",
      auction_count: 50,
      auction_price_count: 23588,
      user_count: "4059"
    },
    {
      id: 22,
      user_id: 1,
      org_id: 0,
      title: "福运连年 | 众名家齐送福 名家书法专场",
      start_time: "2020-01-15 09:30:00",
      end_time: "2020-01-17 22:35:00",
      sort: 78,
      status: 4,
      play_img:
        "https://images.yiya.art/files/bc42a5831025a18bb2df7d6ede58af06.jpg",
      created_at: "2020-01-14 18:26:12",
      updated_at: "2020-01-15 17:15:54",
      auction_count: 40,
      auction_price_count: 18200,
      user_count: "3950"
    },
    {
      id: 21,
      user_id: 1,
      org_id: 0,
      title: "福运连年 | 众名家齐送福 名家书法专场",
      start_time: "2020-01-15 09:30:00",
      end_time: "2020-01-17 22:40:00",
      sort: 78,
      status: 4,
      play_img:
        "https://images.yiya.art/files/4d44a671343640c757ea0934ff4c1885.jpg",
      created_at: "2020-01-14 15:31:20",
      updated_at: "2020-01-15 17:15:54",
      auction_count: 25,
      auction_price_count: 8200,
      user_count: "2486"
    },
    {
      id: 23,
      user_id: 1,
      org_id: 0,
      title: "福运连年 | 众名家齐送福 名家书法专场",
      start_time: "2020-01-15 09:30:00",
      end_time: "2020-01-17 22:30:00",
      sort: 77,
      status: 4,
      play_img:
        "https://images.yiya.art/files/34f7bcde21dce8dc2137e372bdbfe6e8.jpg",
      created_at: "2020-01-14 18:38:41",
      updated_at: "2020-01-15 17:15:54",
      auction_count: 30,
      auction_price_count: 8500,
      user_count: "2529"
    }
  ],
  预展中: [],
  已结束: [
    {
      id: 14,
      user_id: 1,
      org_id: 0,
      title: "福运连年 | 众名家齐送福 名家书法专场",
      start_time: "2020-01-11 09:30:00",
      end_time: "2020-01-13 22:30:00",
      sort: 87,
      status: 5,
      play_img:
        "https://images.yiya.art/files/8df9599ad27e3f327ee07aebc8637612.jpg",
      created_at: "2020-01-10 18:53:05",
      updated_at: "2020-01-15 17:15:54",
      auction_count: 83,
      auction_price_count: 25288,
      user_count: "3958"
    },
    {
      id: 13,
      user_id: 1,
      org_id: 0,
      title: "福运连年 | 众名家齐送福 名家书法专场",
      start_time: "2020-01-11 09:30:00",
      end_time: "2020-01-13 22:40:00",
      sort: 86,
      status: 5,
      play_img:
        "https://images.yiya.art/files/4676334f25ab08f18e12b6a6f7d9f064.jpg",
      created_at: "2020-01-10 15:43:12",
      updated_at: "2020-01-15 17:15:54",
      auction_count: 35,
      auction_price_count: 8660,
      user_count: "2888"
    },
    {
      id: 16,
      user_id: 1,
      org_id: 0,
      title: "福运连年 | 众名家齐送福 名家书法专场",
      start_time: "2020-01-12 09:30:00",
      end_time: "2020-01-14 22:30:00",
      sort: 85,
      status: 5,
      play_img:
        "https://images.yiya.art/files/a315b94a237ebc1bea2938fc9bbd6d37.jpg",
      created_at: "2020-01-11 17:25:45",
      updated_at: "2020-01-15 17:15:54",
      auction_count: 73,
      auction_price_count: 24154,
      user_count: "3220"
    },
    {
      id: 15,
      user_id: 1,
      org_id: 0,
      title: "福运连年 | 众名家齐送福 名家书法专场",
      start_time: "2020-01-12 09:30:00",
      end_time: "2020-01-14 22:40:00",
      sort: 84,
      status: 5,
      play_img:
        "https://images.yiya.art/files/a0e8c57785bfd6b20033023e15390379.jpg",
      created_at: "2020-01-11 17:24:46",
      updated_at: "2020-01-15 17:15:54",
      auction_count: 76,
      auction_price_count: 22000,
      user_count: "4371"
    },
    {
      id: 12,
      user_id: 1,
      org_id: 0,
      title: "福运连年 | 众名家齐送福 名家书法专场",
      start_time: "2020-01-10 09:30:00",
      end_time: "2020-01-12 22:40:00",
      sort: 12,
      status: 5,
      play_img:
        "https://images.yiya.art/files/fd857549d363094c497a42a42c9a4b2b.jpg",
      created_at: "2020-01-09 18:01:55",
      updated_at: "2020-01-15 17:15:54",
      auction_count: 82,
      auction_price_count: 30566,
      user_count: "4819"
    },
    {
      id: 11,
      user_id: 1,
      org_id: 0,
      title: "福运连年 | 众名家齐送福 名家书法专场",
      start_time: "2020-01-10 09:30:00",
      end_time: "2020-01-12 22:30:00",
      sort: 11,
      status: 5,
      play_img:
        "https://images.yiya.art/files/cce771c60773822d97a9fae5bf80c669.jpg",
      created_at: "2020-01-09 17:58:53",
      updated_at: "2020-01-15 17:15:54",
      auction_count: 36,
      auction_price_count: 7528,
      user_count: "3495"
    },
    {
      id: 10,
      user_id: 1,
      org_id: 0,
      title: "福运连年 | 众名家齐送福 名家书法专场",
      start_time: "2020-01-09 09:30:00",
      end_time: "2020-01-11 22:30:00",
      sort: 10,
      status: 5,
      play_img:
        "https://images.yiya.art/files/c41b7b9e43deafc940caebb6c955972f.jpg",
      created_at: "2020-01-08 23:00:40",
      updated_at: "2020-01-15 17:15:54",
      auction_count: 95,
      auction_price_count: 46000,
      user_count: "5190"
    },
    {
      id: 9,
      user_id: 1,
      org_id: 0,
      title: "福运连年 | 众名家齐送福 名家书法专场",
      start_time: "2020-01-08 09:30:00",
      end_time: "2020-01-10 22:40:00",
      sort: 9,
      status: 5,
      play_img:
        "https://images.yiya.art/files/14d3eac4bb9c70b6a85ec8e335162ce7.jpg",
      created_at: "2020-01-07 22:39:37",
      updated_at: "2020-01-15 17:15:54",
      auction_count: 125,
      auction_price_count: 57400,
      user_count: "5379"
    },
    {
      id: 8,
      user_id: 1,
      org_id: 0,
      title: "福运连年 | 众名家齐送福 名家书法专场",
      start_time: "2020-01-09 09:30:00",
      end_time: "2020-01-11 22:40:00",
      sort: 8,
      status: 5,
      play_img:
        "https://images.yiya.art/files/4e175d1d0523355dd4395ff708730eda.jpg",
      created_at: "2020-01-07 22:31:28",
      updated_at: "2020-01-15 17:15:54",
      auction_count: 71,
      auction_price_count: 83800,
      user_count: "1893"
    },
    {
      id: 7,
      user_id: 1,
      org_id: 0,
      title: "福运连年 | 众名家齐送福 名家书法专场",
      start_time: "2020-01-08 09:30:00",
      end_time: "2020-01-10 22:30:00",
      sort: 7,
      status: 5,
      play_img:
        "https://images.yiya.art/files/2ae495cf50d9e9c409aefec49a4f4cc6.jpg",
      created_at: "2020-01-07 15:20:14",
      updated_at: "2020-01-15 17:15:54",
      auction_count: 70,
      auction_price_count: 44900,
      user_count: "1736"
    }
  ],
  plays_1: 0,
  plays_2: 7,
  plays_3: 10
};

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
          activeStyle={false}
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
        <AuctionView
          title={{
            img: require("./img/hammer.png"),
            title: "热拍专场",
            link: "/auction"
          }}
          list={auctionList}
        ></AuctionView>
        {/* 子路由信息 */}
        <Route exact path="/home/news" component={LoadAble("Home/News")} />
      </div>
    );
  }
}

export default Home;
