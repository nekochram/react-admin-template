import React, { useState } from 'react';
import { Outlet,useNavigate } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LoginOutlined
} from '@ant-design/icons';
import { Layout, Button, theme, Popconfirm} from 'antd';
import SilderMenu from "@/components/SiderMenu"
const { Header, Sider, Content } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigateTo=useNavigate()
  const loginOut=()=>{
    localStorage.removeItem("userid")
    navigateTo("/Login")
  }
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <SilderMenu/>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer,display:"flex",justifyContent:"space-between" }} >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Popconfirm
            placement="bottomRight"
            title="退出登录"
            description="确认退出登录？"
            onConfirm={loginOut}
            okText="确认"
            cancelText="取消"
        >
            <Button type="text" icon={<LoginOutlined />} style={{
                fontSize: '16px',
                width: 64,
                height: 64,
            }}/>
        </Popconfirm>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;