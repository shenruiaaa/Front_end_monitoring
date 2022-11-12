import React, { Component } from 'react'
import { HomeOutlined } from '@ant-design/icons';
import './css/header.css'



export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='header_top'>
                    {/* <img src={myImg} alt="" /> */}
                    <HomeOutlined />
                    <span>欢迎来到</span><span className='task'>前端监控系统</span>
                </div>
                <div className='header_bottom'>3274小组项目</div>
            </header>
        )
    }
}
