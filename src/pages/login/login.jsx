import React, { Component } from "react";
import { Form, Input, Icon, Checkbox, Button ,message} from "antd";
import "./login.less";
import {setstorage}from '../../api/storage'
class Login extends Component {
  onLogin= async (e)=>{
    e.preventDefault();
   await this.props.form.validateFields(async(err,value)=>{
     if(!err){
        setstorage(value);
        message.success('登录成功')
        this.props.history.replace('/admin')
      }else{
        message.error('登录失败')
      }
   })

    
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="Login-wrap">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(      
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="www.bilibili.com">
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={this.onLogin}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default Form.create()(Login);
