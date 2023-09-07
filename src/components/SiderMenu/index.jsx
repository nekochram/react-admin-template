import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import React, { useState } from "react";
  import { Menu } from "antd";
  import { useNavigate, useLocation } from "react-router-dom";
  
  const items = [
    {
      label: "仪表盘",
      key: "/Dashboard",
      icon: <PieChartOutlined />,
    },
    {
      label: "用户页",
      key: "/User",
      icon: <DesktopOutlined />,
    },
    {
      label: "User",
      key: "sub1",
      icon: <UserOutlined />,
      children: [
        { label: "档案页", key: "/Archive" },
        { label: "Bill", key: "/page4" },
        { label: "Alex", key: "/page5" },
      ],
    },
    {
      label: "Team",
      key: "sub2",
      icon: <TeamOutlined />,
      children: [
        { label: "Team 1", key: "6" },
        { label: "Team 2", key: "8" },
      ],
    },
    {
      label: "Files",
      key: "/page9",
      icon: <FileOutlined />,
    },
  ];
  const rootSubmenuKeys = ["sub1", "sub2"];
  const MainMenu = () => {
    const navigateTo = useNavigate();
    const currentRoute = useLocation();
    const menuClick = (e) => {
      navigateTo(e.key);
    };
    const firstOpenKeys = items
      .map((item) => {
        if (
          item.children &&
          item.children.find(
            (children) => children.key == currentRoute.pathname
          )
        )
          return item.key
      })
      .filter((item) => item);
    const [openKeys, setOpenKeys] = useState(firstOpenKeys);
    const onOpenChange= (keys) => {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
      if (~rootSubmenuKeys.indexOf(latestOpenKey)) {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      } else {
        setOpenKeys(keys);
      }
    };
    return (
      <Menu
        theme="dark"
        defaultSelectedKeys={[currentRoute.pathname]}
        mode="inline"
        items={items}
        openKeys={openKeys}
        onClick={menuClick}
        onOpenChange={onOpenChange}
      />
    );
  };
  export default MainMenu;
  