import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, QuestionCircleOutlined, ContactsOutlined } from '@ant-design/icons';
import './MainLayout.less';

const { Footer, Sider } = Layout;

const rootRoutes = ['/', '/request', '/team'];
const aboutSubRoutes = ['/request/me', '/request/company'];

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const { children } = this.props;
    return (
      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          {collapsed ? (
            <div className="logo">wallet</div>
          ) : (
            <div className="logo">connect Wallet</div>
          )}
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[
              aboutSubRoutes.includes(window.location.pathname)
                ? '1'
                : rootRoutes.indexOf(window.location.pathname).toString(),
            ]}
          >
            <Menu.Item key="0">
              <Link to="/service">
                <HomeOutlined />
                <span className="menu-item-link">Service</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to="/request">
                <QuestionCircleOutlined />
                <span className="menu-item-link">Request</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/team">
                <ContactsOutlined />
                <span className="menu-item-link">Team</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/serviceCreation">
                <ContactsOutlined />
                <span className="menu-item-link">Service Creation</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/teamCreation">
                <ContactsOutlined />
                <span className="menu-item-link">Team Creation</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>{children}</Layout>
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
