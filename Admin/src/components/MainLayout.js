import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
  AiOutlineLogout,
} from "react-icons/ai";
import { RiCouponLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { Layout, Menu, theme } from "antd";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const menuItems = [
    {
      key: "",
      icon: <AiOutlineDashboard className="fs-4" />,
      label: "Dashboard",
    },
    {
      key: "customers",
      icon: <AiOutlineUser className="fs-4" />,
      label: "Customers",
    },
    {
      key: "Catalog",
      icon: <AiOutlineShoppingCart className="fs-4" />,
      label: "Catalog",
      children: [
        {
          key: "product",
          icon: <AiOutlineShoppingCart className="fs-4" />,
          label: "Add Product",
        },
        {
          key: "list-product",
          icon: <AiOutlineShoppingCart className="fs-4" />,
          label: "Product List",
        },
        {
          key: "brand",
          icon: <SiBrandfolder className="fs-4" />,
          label: "Brand",
        },
        {
          key: "list-brand",
          icon: <SiBrandfolder className="fs-4" />,
          label: "Brand List",
        },
        {
          key: "category",
          icon: <BiCategoryAlt className="fs-4" />,
          label: "Category",
        },
        {
          key: "list-category",
          icon: <BiCategoryAlt className="fs-4" />,
          label: "Category List",
        },
        {
          key: "color",
          icon: <AiOutlineBgColors className="fs-4" />,
          label: "Color",
        },
        {
          key: "list-color",
          icon: <AiOutlineBgColors className="fs-4" />,
          label: "Color List",
        },
      ],
    },
    {
      key: "orders",
      icon: <FaClipboardList className="fs-4" />,
      label: "Orders",
    },
    {
      key: "marketing",
      icon: <RiCouponLine className="fs-4" />,
      label: "Marketing",
      children: [
        {
          key: "coupon",
          icon: <ImBlog className="fs-4" />,
          label: "Add Coupon",
        },
        {
          key: "coupon-list",
          icon: <RiCouponLine className="fs-4" />,
          label: "Coupon List",
        },
      ],
    },
    {
      key: "blogs",
      icon: <FaBloggerB className="fs-4" />,
      label: "Blogs",
      children: [
        {
          key: "blog",
          icon: <ImBlog className="fs-4" />,
          label: "Add Blog",
        },
        {
          key: "blog-list",
          icon: <FaBloggerB className="fs-4" />,
          label: "Blog List",
        },
        {
          key: "blog-category",
          icon: <ImBlog className="fs-4" />,
          label: "Add Blog Category",
        },
        {
          key: "blog-category-list",
          icon: <FaBloggerB className="fs-4" />,
          label: "Blog Category List",
        },
      ],
    },
    {
      key: "enquiries",
      icon: <FaClipboardList className="fs-4" />,
      label: "Enquiries",
    },
    {
      key: "signout",
      icon: <AiOutlineLogout className="fs-4" />,
      label: "Sign Out",
    },
  ];

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="dark">
        <div className=" text-white text-center py-3 mb-0">
          <h2 className="fs-5 mb-0">
            <span className="sm-logo">EC</span>
            <span className="lg-logo">E-Commerce</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          items={menuItems}
          onClick={({ key }) => {
            if (key === "signout") {
              localStorage.clear();
              window.location.reload();
            } else {
              navigate(key);
            }
          }}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{ background: colorBgContainer }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{ margin: "24px 16px", padding: 24, minHeight: 280, background: colorBgContainer }}
        >
          <ToastContainer autoClose={250} theme="light" />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
