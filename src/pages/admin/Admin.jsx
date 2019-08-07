import React, { Component, Fragment } from "react";
// import { BrowserRouter, Route,Switch,Redirect } from "react-router-dom";
import { Layout } from "antd";
import Left from './left'
import './Admin.less'
const { Header, Footer, Sider, Content } = Layout;

export default class Admin extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Layout >
            <Sider>
            <Left></Left>
            </Sider>
            <Layout>
              <Header style={{ background: "#fff" }}>Header</Header>
              <Content className='admin-centent'>Content</Content>
              <Footer className='footer'>Footer</Footer>
            </Layout>
          </Layout>
        </div>
      </Fragment>
    );
  }
}
