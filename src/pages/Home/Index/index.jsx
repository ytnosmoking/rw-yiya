import React, { Component } from "react";
import { WhiteSpace } from "antd-mobile";
import { Link, Route } from "react-router-dom";
import ArtistLine from "./ArtistLine";
import SingleRecomend from "./SingleRecomend";
import AuctionView from "./Auction";
import BottomCode from "component/BottomCode";
import LoadAble from "component/Loading";
import { ImageBanner } from "component/Banner";
import { GridLink } from "component/Grid";
import { BottomBord, MsgList } from "component/Common";
import "./index.less";
import {
  carousel,
  gridLinks,
  msgsList,
  recomend,
  singleList,
  auctionList
} from "./data";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel
    };
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const {
      location: { pathname }
    } = this.props;
    const isHome = pathname === "/home";
    const { carousel } = this.state;
    return (
      <div className="home" style={{ overflow: isHome ? "auto" : "hidden" }}>
        {/* banner */}
        <ImageBanner list={carousel} />

        {/* ad */}
        <Link to="/home/check-in" className="ad">
          <img src={require("./img/check-in.png")} alt="" />
        </Link>

        {/* Grid */}
        <GridLink
          list={gridLinks}
          renderItem={link => (
            <Link to={link.link} className="home-grid">
              <div className="grid-icon">
                <img src={link.icon} alt="" />
              </div>
              <div>
                <span className="fz12">{link.name}</span>
              </div>
            </Link>
          )}
        />
        <BottomBord />
        {/* scroll Msgs */}
        <MsgList
          icon={require("./img/headline.png")}
          list={msgsList}
          link={"/home/news"}
        />
        <BottomBord />

        {/* artist online */}
        <ArtistLine
          title={{
            img: require("./img/live-title.png"),
            title: "艺术直播",
            link: "/auction/live-list"
          }}
          recomend={recomend}
        />
        <BottomBord />

        {/* single recomend */}
        <SingleRecomend
          title={{
            img: require("./img/single.png"),
            title: "单品推荐",
            link: "/home/single-recommend"
          }}
          recomend={singleList.slice(0, 2)}
        />
        <BottomBord />
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
        <Route exact path="/home/free" component={LoadAble("Home/Free")} />
        {/* <Route
          exact
          path="/home/news/:id"
          component={LoadAble("Home/News/Detail")}
        /> */}
      </div>
    );
  }
}

export default Home;
