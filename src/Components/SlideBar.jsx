import React, { useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { SiShortcut } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SlFire } from "react-icons/sl";
import { FiShoppingBag } from "react-icons/fi";
import { PiMusicNoteLight } from "react-icons/pi";
import { BiMovie } from "react-icons/bi";
import { FiRadio } from "react-icons/fi";
import { GrGamepad } from "react-icons/gr";
import { HiOutlineNewspaper } from "react-icons/hi";
import { TfiCup } from "react-icons/tfi";
import { FaRegLightbulb } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { MdOutlineRadar } from "react-icons/md";
import { useSelector } from "react-redux";
import MenuIcons from "./MenuIcons";

const SlideBar = () => {
  const store = useSelector((store) => store?.showmenu?.isMenuOpen);
  if (!store) return;
  return (
    <div className=" flex flex-col">
      <div className="  w-38  h-full p-5  ">
        <ul className=" flex flex-col  list-none gap-6">
          <li className=" flex items-center">
            <AiFillHome size="25px" className="inline-block mr-3 " />
            Home
          </li>
          <li className=" flex items-center">
            {" "}
            <SiShortcut size="25px" className="inline-block mr-3" />
            Shorts
          </li>
          <li className=" flex items-center">
            {" "}
            <MdOutlineSubscriptions
              size="25px"
              className=" inline-block mr-3"
            />
            Subscriptions
          </li>
        </ul>

        <div className="mt-2 border-t border-gray-300  ">
          <h1 className=" mt-2 font-bold">Expolre</h1>
          <ul className=" flex flex-col  list-none gap-6 mt-3 ">
            <li className=" flex items-center">
              <SlFire size="25px" className="inline-block mr-3 " />
              Trending
            </li>
            <li className=" flex items-center">
              {" "}
              <FiShoppingBag size="25px" className="inline-block mr-3" />
              Shopping
            </li>
            <li className=" flex items-center">
              {" "}
              <PiMusicNoteLight size="25px" className=" inline-block mr-3" />
              Music
            </li>
            <li className=" flex items-center">
              {" "}
              <BiMovie size="25px" className=" inline-block mr-3" />
              Movies
            </li>
            <li className=" flex items-center">
              {" "}
              <FiRadio size="25px" className=" inline-block mr-3" />
              Live
            </li>
            <li className=" flex items-center">
              {" "}
              <GrGamepad size="25px" className=" inline-block mr-3" />
              Gaming
            </li>
            <li className=" flex items-center">
              {" "}
              <HiOutlineNewspaper size="25px" className=" inline-block mr-3" />
              News
            </li>
            <li className=" flex items-center">
              {" "}
              <TfiCup size="25px" className=" inline-block mr-3" />
              Sports
            </li>
            <li className=" flex items-center">
              {" "}
              <FaRegLightbulb size="25px" className=" inline-block mr-3" />
              Learning
            </li>
            <li className=" flex items-center">
              {" "}
              <GiClothes size="25px" className=" inline-block mr-3" />
              Fashion & Beauty
            </li>
            <li className=" flex items-center">
              {" "}
              <MdOutlineRadar size="25px" className=" inline-block mr-3" />
              Podcasts
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
