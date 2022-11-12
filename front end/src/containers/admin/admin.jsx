import React, { Component } from 'react'
import { createDemo1Action, createDemo2Action } from '../../redux/action_creators/test_action';
import { connect } from 'react-redux';

import { Layout } from 'antd';
import './css/admin.css'
import { Navigate, Route, Routes, Outlet } from 'react-router-dom'
import Header from './header/header';
import LeftNav from './left_nav/left_nav';
const { Footer, Sider, Content } = Layout;


class Admin extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {

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
          <Footer className='footer'>前端监控系统展示页面</Footer>
        </Layout>
      </Layout>

    )
  }
}
export default connect(
  state => ({ peiqi: state.test }),
  { demo1: createDemo1Action }
)(Admin)
