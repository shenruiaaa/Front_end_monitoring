import React, { Component } from 'react'
import { createDeleteUserInfoAction } from '../../redux/action_creators/login_action';
import { reqCategoryList } from '../../api';
import { connect } from 'react-redux';

import { Layout } from 'antd';
import './css/admin.css'
import { Outlet } from 'react-router-dom'
import Header from './header/header';
import LeftNav from './left_nav/left_nav';
const { Footer, Sider, Content } = Layout;

@connect(
  state => ({ userInfo: state.userInfo }),
  {
    deleteUserInfo: createDeleteUserInfoAction
  }
)
class Admin extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  logout = () => {
    this.props.deleteUserInfo()
    //
  }
  demo = async () => {
    let result = await reqCategoryList()
    console.log(result)
  }
  //在render里，若想实现跳转，最好使用<redirect>
  render() {
    const { user, isLogin } = this.props.userInfo
    if (!isLogin) {
      window.location.href = "/login"
      return null
    } else {

      return (

        <Layout className='ad'>
          <Sider className='sider'><LeftNav /></Sider>
          <Layout>
            <Header className='header'>Header</Header>
            <Content className='content' >
              {/* <Routes>
              <Route path='/admin/home' element={<Home />} />
              <Route path='/admin/pv' element={<Pv />} />
              <Route path='/admin/error' element={<Error />} />
              <Route path='/admin/performance' element={<Performance />} />
              <Route path="/admin" element={<Navigate to="/admin/home" />} />
            </Routes> */}
              <Outlet />
            </Content>
            <Footer className='footer'>前端监控系统展示页面<button onClick={this.logout}>退出登录</button>
              <button onClick={this.demo}>测试获取商品分类列表</button></Footer>
          </Layout>
        </Layout>

      )
    }
  }
}

export default Admin
