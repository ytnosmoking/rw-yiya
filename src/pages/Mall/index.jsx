import React, { Component } from "react";
import { Tabs, Toast } from "antd-mobile";
import PinterestGrid from "rc-pinterest-grid";
import SearchBar from "component/SearchBar";
import { ImageBanner, MallBanner } from "component/Banner";
import { GridLink } from "component/Grid";
import { Route, Link } from "react-router-dom";
import LoadAble from "component/Loading";
import { BottomBord, MsgList, SubTitle } from "component/Common";
import GoodItem from "./GoodItem";
import {
  carousel,
  gridLinks,
  msgList,
  recomendList,
  category,
  arr_0,
  arr_1,
  arr_2,
  arr_3,
  arr_4
} from "./data";
import "./index.less";

const defaultArr = index => {
  if (index === 0) {
    return arr_0;
  }
  if (index === 1) {
    return arr_1;
  }
  if (index === 2) {
    return arr_2;
  }
  if (index === 3) {
    return arr_3;
  }
  if (index === 4) {
    return arr_4;
  }
  return arr_0;
};
const BottomDis = 100;
class Mall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel,
      recomendList,
      category,
      tab: 0,

      lists: { data: [] },
      loading: false
    };
  }
  componentDidMount() {
    const { category, tab } = this.state;
    //默认 是应该先加载完 种类
    category.forEach((item, index) => {
      this.setState({
        ["arr_" + index]: {}
      });
    });
    // 默认加载 tab=0 的数据
    // 种类加载完后 获取 种类1 的数据
    this.setState({
      ["arr_" + tab]: defaultArr(tab),
      lists: defaultArr(tab)
    });
  }
  setTab = index => {
    console.log(index);
    const stateArr = this.state["arr_" + index];
    const data =
      stateArr.data && stateArr.data.length ? stateArr : defaultArr(index);
    this.setState({
      tab: index,
      lists: data
    });
  };
  onScroll = e => {
    const { tab, loading } = this.state;

    let offsetH = e.target.offsetHeight;
    let scrollT = e.target.scrollTop;
    let height = e.target.scrollHeight;
    //div 距离底部 = 列表的总高度 -（滚动的距离 + 窗口可视高度）
    let bottom = height - (scrollT + offsetH);
    console.log(bottom);
    // 滚动到底 加载数据
    // 先通过 tab  来判断 是哪个种类的数据 判别是否有下一页数据
    if (loading) {
      return Toast.loading("加载数据");
    }
    if (bottom < BottomDis) {
      const info = this.state["arr_" + tab];
      const { from, last_page } = info;
      if (from === last_page) {
        return;
      }
      //  如果不是最后一页加载 数据
      if (from < last_page) {
        Toast.loading("加载数据");
        this.setState(
          {
            loading: true
          },
          () => {
            // ajax // tab 参数 请求接口数据 ajax
            setTimeout(() => {
              this.setState(
                preState => ({
                  ["arr_" + tab]: {
                    ...preState["arr_" + tab],
                    data: [
                      ...preState["arr_" + tab].data,
                      ...defaultArr(tab).data
                    ],
                    from: from + 1,
                    current_page: from + 1
                  }
                }),
                () => {
                  Toast.hide();
                  this.setState({
                    loading: false,
                    lists: this.state["arr_" + tab]
                  });
                }
              );
            }, 2000);
          }
        );
      } else {
        Toast.info("数据加载完成");
      }
    }
  };
  render() {
    const { tab, lists } = this.state;
    const {
      history,
      location: { pathname }
    } = this.props;

    const isMall = pathname === "/mall";
    const docEl = document.documentElement.clientWidth;

    return (
      <div className="mall" style={{ overflow: isMall ? "auto" : "hidden" }}>
        {/* search */}
        <SearchBar type={2} history={history} />
        <div className="carousel">
          <ImageBanner list={carousel} />
        </div>

        {/* Grid */}
        <GridLink
          list={gridLinks}
          renderItem={link => (
            <Link to={link.link} className="mall-grid">
              <img src={link.icon} alt="" />
            </Link>
          )}
          config={{ columnNum: 2 }}
        />
        <BottomBord />

        {/* msg */}
        <MsgList icon={require("./images/horn.png")} list={msgList} iconClass />
        <BottomBord />

        <SubTitle title="收藏艺术家推荐" />
        <MallBanner list={recomendList} />
        <BottomBord />

        <SubTitle title="全场佳作" desc="每日更新" />
        <div style={{ minHeight: 0, maxHeight: "100vh" }}>
          <Tabs
            tabs={category}
            tabBarBackgroundColor="#fff"
            tabBarActiveTextColor="red"
            tabBarTextStyle={{ fontSize: "16px" }}
            tabBarUnderlineStyle={{
              borderColor: "red",
              width: "10%",
              left:
                (tab / category.length +
                  1 / (category.length * category.length)) *
                  100 +
                "%"
            }}
            initialPage={0}
            onTabClick={(tab, index) => {
              this.setTab(index);
            }}
            onChange={(tab, index) => {
              this.setTab(index);
            }}
          >
            <div className="waterCont" onScroll={this.onScroll}>
              <PinterestGrid
                columns={2} // 一共有多少列
                columnWidth={docEl / 2 - 16} // 列宽度
                gutterWidth={16} // 块之间的水平间隙
                gutterHeight={20} // 块之间的上下间隙
              >
                {// 此处放置需要渲染的块
                lists.data.map((list, index) => (
                  <GoodItem list={list} key={index} />
                ))}
              </PinterestGrid>
            </div>
          </Tabs>
        </div>

        <Route path="/mall/search" component={LoadAble("Mall/Search")} />
      </div>
    );
  }
}

export default Mall;
