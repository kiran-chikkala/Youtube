import React from "react";
import { AiFillHome } from "react-icons/ai";
import { SiShortcut } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlinePlaySquare } from "react-icons/ai";
const MenuIcons = () => {
  return (
    <div className="w-38  h-screen p-5 flex flex-col gap-6">
      <h6 className=" flex flex-col  text-xs">
        <AiFillHome size="25px" className="inline-block" />
        Home
      </h6>
      <h6 className=" flex flex-col text-xs">
        <SiShortcut size="25px" className="inline-block" />
        Shorts
      </h6>
      <h6 className=" flex flex-col text-xs">
        <MdOutlineSubscriptions size="25px" className=" inline-block" />
        Subscriptions
      </h6>
      <h6 className=" flex flex-col text-xs">
        <AiOutlinePlaySquare size="25px" className=" inline-block" />
        You
      </h6>
    </div>
  );
};

export default MenuIcons;
