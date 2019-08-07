import React, { Component, Fragment } from "react";
import LeftMenuData from "../../data/leftmenuData.js";
import { Menu, Icon, Button } from "antd";
import { Link, withRouter } from "react-router-dom";
import "./left.less";
const { SubMenu } = Menu;
export default class Left extends Component {
  creatItem = item => {
    return (
      <Menu.Item key={item.key}>
        <Link>
          {/* to={item.key} */}
          <span>{item.title} </span>
        </Link>
      </Menu.Item>
    );
  };
  creatMenu = (list, index) => {
    //   console.log(list);

    return list.map(item => {
      if (item.subs) {
        return (
          <SubMenu
            key={index}
            title={
              <span>
                {item.icon && <Icon type={item.icon} />}
                <span> {item.title}</span>
              </span>
            }
          >
            {item.subs.map((item, index) => {
              if (item.subs) {
                console.log(item.subs);
                return (
                  <SubMenu
                    key={index}
                    title={
                      <span>
                        {item.icon && <Icon type={item.icon} />}
                        <span> {item.title}</span>
                      </span>
                    }
                  >
                    {item.subs.map(item => {
                      return this.creatItem(item);
                    })}
                  </SubMenu>
                );
              } else {
                return this.creatItem(item);
              }
            })}
          </SubMenu>
        );
      } else {
        return this.creatItem(item);
      }
    });
  };

  render() {
    return (
      <Fragment>
        <div className="centent">
          <div>
            <Link to="/home" className="logo" onClick={this.handleClick}>
              <h1>Arknights</h1>
            </Link>
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              theme="dark"
            >
              {this.creatMenu(LeftMenuData)}
            </Menu>
          </div>
        </div>
      </Fragment>
    );
  }
}
