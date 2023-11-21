import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import { useSelector } from "react-redux";
import SlideBar from "./SlideBar";
const Body = () => {
  const store = useSelector((store) => store.showmenu.HomeMenu);
  return (
    <div className=" flex">
      {store ? <Menu /> : <SlideBar />}
      <Outlet />
    </div>
  );
};

export default Body;
