import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  NumberOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Button } from "antd";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const { Header, Content, Footer, Sider } = Layout;

function HeaderTop({ children }) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  let roles = JSON.parse(localStorage.getItem("rols"));


  const items = [
    getItem(
      <Link to="/" className="text-decoration-none">
        Home{" "}
      </Link>,
      "1",
      <HomeOutlined />
    ),

    getItem(
      <Link to="/categories" className="text-decoration-none">
        Categories
      </Link>,
      "2",
      <ShoppingCartOutlined />
    ),

    getItem(
      <Link to="/brands" className="text-decoration-none">
        Brands{" "}
      </Link>,
      "3",
      <NumberOutlined />
    ),

    getItem(
      <Link to="/users" className="text-decoration-none">
        Users{" "}
      </Link>,
      "4",
      <UserOutlined />
    ),

    getItem(
      <Link to="/products" className="text-decoration-none">
        Products{" "}
      </Link>,
      "5",
      <ShoppingOutlined />
    ),
    getItem(
      <Link to="/logout" className="text-decoration-none">
        Logout{" "}
      </Link>,
      "6",
      <LogoutOutlined />
    ),
  ];

  const itemsModerador = [
    getItem(
      <Link to="/" className="text-decoration-none">
        Home{" "}
      </Link>,
      "1",
      <HomeOutlined />
    ),

    getItem(
      <Link to="/categories" className="text-decoration-none">
        Categories
      </Link>,
      "2",
      <ShoppingCartOutlined />
    ),
    getItem(
      <Link to="/logout" className="text-decoration-none">
        Logout{" "}
      </Link>,
      "6",
      <LogoutOutlined />
    ),
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={roles[0] === "Administrador" ? items : itemsModerador}
        />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: collapsed ? 80 : 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: location.pathname.includes("/")
              ? "rgb(230, 230, 248)"
              : colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: location.pathname.includes("/")
                ? "rgb(230, 230, 248)"
                : colorBgContainer,
              minHeight: "80vh",
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Shop Only ©2023
        </Footer>
      </Layout>
    </Layout>
  );
}
export default HeaderTop;
