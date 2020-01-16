import React, { Component } from "react";
import { Carousel, Grid, WhiteSpace } from "antd-mobile";
import { Link, Route } from "react-router-dom";
import ArtistLine from "./ArtistLine";
import SingleRecomend from "./SingleRecomend";
import AuctionView from "./Auction";
import BottomCode from "component/BottomCode";
import LoadAble from "component/Loading";
import "./index.less";
import { gridLinks, msgsList, recomend, singleList, auctionList } from "./data";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["1", "2", "3"]
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
            <a key={val} href="http://www.alipay.com" className="banner">
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
        {/* auction */}
        <AuctionView
          title={{
            img: require("./img/hammer.png"),
            title: "热拍专场",
            link: "/auction"
          }}
          list={auctionList}
        ></AuctionView>

        <WhiteSpace />
        {/* BottomCode */}
        <BottomCode />

        {/* 子路由信息 */}
        <Route path="/home/news" component={LoadAble("Home/News")} />
      </div>
    );
  }
}

export default Home;
