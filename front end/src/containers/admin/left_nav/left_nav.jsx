import React, { Component } from 'react'
import { Link } from "react-router-dom"
import {

    StockOutlined,
    CloseOutlined,

    DesktopOutlined,

    MenuFoldOutlined,

} from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react'
import myImg from './css/good.png';
import "./css/left_nav.css"
const { Item } = Menu;
export default function LeftNav() {


    return (
        <div>
            <header>
                <img src={myImg} alt="" />
                <h1>前端监控系统</h1>
            </header>
            <Menu
                defaultSelectedKeys={['hpme']}
                defaultOpenKeys={['1']}
                mode="inline"
                theme="dark"
            /* inlineCollapsed={collapsed} */
            /* items={items} */
            >

                <Item key="home">
                    <Link to="/admin/home">
                        <MenuFoldOutlined />
                        <span>首页</span>
                    </Link>
                </Item>


                <Item key="PV">
                    <Link to="/admin/pv">
                        <DesktopOutlined />
                        <span>用户行为监控</span>
                    </Link>
                </Item>
                <Item key="performance">
                    <Link to="/admin/performance">
                        <StockOutlined />
                        <span>关键性能数据监控</span>
                    </Link>
                </Item>
                <Item key="error">
                    <Link to="/admin/error">
                        <CloseOutlined />
                        <span>异常监控</span>
                    </Link>
                </Item>

            </Menu>
        </div>

    )


}