import React, { Component } from 'react'
import "./css/login.css"
import myImg from '../admin/left_nav/css/good.png';
import axios from 'axios';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { connect } from 'react-redux'
import { createDemo1Action, createDemo2Action } from '../../redux/action_creators/test_action';
class Login extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  onFinish = (values) => {
    /*  event.preventDefault();//阻止默认事件，禁止form表单提交，通过ajax发送 */

    alert('表单提交了')
    axios.request({
      url: 'http://localhost:9000/login',
      method: 'POST',
      data: {
        "username": values.username,
        "password": values.password,
      }
    }).then((response) => {
      console.log(response);


    }).catch((resaon) => {
      console.log(resaon)
    })

    //1.获取用户输入
    //2.校验数据
    //3.发起登录请求
  }
  render() {

    return (
      <div className='login' >
        <header>
          <img src={myImg} alt="logo" />
          <h1>前端监控系统</h1>
        </header>
        <section>
          <h2>用户登录</h2>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入你的用户名!',
                },
                {
                  max: 12, message: '用户名必须小于等于12位!'
                },
                {
                  min: 4, message: '用户名必须大于等于4位!'
                },
                {
                  pattern: /^\w+$/, message: '用户名必须大于等于4位!'
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入你的密码!',
                },
                {
                  max: 12, message: '密码必须小于等于12位!'
                },
                {
                  min: 4, message: '密码必须大于等于4位!'
                },
                {
                  pattern: /^\w+$/, message: '密码必须大于等于4位!'
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" style={{ color: 'rgba(0,0,0.25)' }} />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>


            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>

            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}

export default connect(
  state => ({ test: state.test }),
  {
    demo1: createDemo1Action,
    demo2: createDemo2Action,
  }
)(Login);

