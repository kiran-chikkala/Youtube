import React, { useEffect } from "react";
import SlideBar from "./SlideBar";
import MenuIcons from "./MenuIcons";
import { useDispatch, useSelector } from "react-redux";
import { addMenu } from "../Redux/menuSlice";

const Menu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addMenu());
  }, []);
  const store = useSelector((store) => store.showmenu.isMenuOpen);

  return <div>{store ? <SlideBar /> : <MenuIcons />}</div>;
};

export default Menu;
