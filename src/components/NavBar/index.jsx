import React, { Component } from "react";
import { Flex } from "antd-mobile";
import { NavLink, withRouter } from "react-router-dom";
import "./index.less";
@withRouter
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          path: "/home",
          name: "首页"
        },
        {
          path: "/mall",
          name: "商场"
        },
        {
          path: "/auction",
          name: "拍卖"
        },
        {
          path: "/score",
          name: "积分"
        },
        {
          path: "/mine",
          name: "我的"
        }
      ]
    };
  }
  render() {
    console.log(this.props);
    const { pathname: current } = this.props.location;
    const { links } = this.state;
    return (
      <Flex className="navBar">
        {links.map(link => (
          <Flex.Item key={link.path}>
            <NavLink to={link.path}>
              <div>
                <img
                  src={require(`./img${link.path}${
                    current.includes(link.path) ? "-active" : ""
                  }.png`)}
                  alt=""
                />
              </div>
              <span className="fz12">{link.name}</span>
            </NavLink>
          </Flex.Item>
        ))}
      </Flex>
    );
  }
}

export default NavBar;
