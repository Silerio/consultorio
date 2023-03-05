import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router';
import CustomSidebar from './CustomSidebar';
import CustomHeader from './CustomHeader';
import CustomFooter from './CustomFooter';

const { Header, Content, Footer, Sider } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer } } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        theme="light" 
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)}
      >
        <CustomSidebar />
      </Sider>

      <Layout className="site-layout">
        <Header style={{ background: colorBgContainer, display: 'flex' }}>
          <CustomHeader />
        </Header>

        <Content style={{ margin: '16px' }}>
          <Outlet />
        </Content>

        <Footer>
          <CustomFooter />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;