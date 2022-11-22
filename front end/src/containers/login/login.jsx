import React, { Component } from 'react'
import "./css/login.css"
import myImg from '../admin/left_nav/css/good.png';

import { reqLogin } from '../../api/index'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { connect } from 'react-redux'
import { createSaveUserInfoAction } from '../../redux/action_creators/login_action';
@connect(
  state => ({ isLogin: state.userInfo.isLogin }),
  {
    saveUserInfo: createSaveUserInfoAction,
  }
)
class Login extends Component {
  componentDidMount() {
    console.log(this.props);

  }
  onFinish = (values) => {
    /*  event.preventDefault();//阻止默认事件，禁止form表单提交，通过ajax发送 */
    const { username, password } = values

    alert('表单提交了')
    reqLogin(username, password).then((response) => {
      console.log(response);
      const { status, msg, data } = response
      if (status === 0) {
        console.log(data)
        //1.跳转admin页面
        this.props.saveUserInfo(data)

        window.location.href = "/admin"
        //2.服务器返回的user信息们还有token交给redux管理
        //this.props.history.replace('admin')

      } else {
        message.warning(msg, 1)
      }
    }).catch((resaon) => {
      console.log(resaon)
    })

    //1.获取用户输入
    //2.校验数据
    //3.发起登录请求
  }
  render() {
    const { isLogin } = this.props;
    if (isLogin) {
      window.location.href = "/admin"
    }
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

export default Login

