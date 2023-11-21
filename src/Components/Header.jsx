import React, { useEffect, useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { TfiSearch } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { addMenu } from "../Redux/menuSlice";
import { YOUTUDE_SUGGESTION_API } from "../utils/youtube";
const Header = () => {
  const [searchQuerry, setsearchQuerry] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const result = setTimeout(() => {
      seareach();
    }, 200);
    return () => {
      clearInterval(result);
    };
  }, [searchQuerry]);
  const seareach = async () => {
    const data = await fetch(YOUTUDE_SUGGESTION_API + searchQuerry);
    const json = await data.json();
    setSuggestions(json[1]);
  };
  const dispatch = useDispatch();
  function handleMenu() {
    dispatch(addMenu());
  }
  return (
    <div className="  md:p-5  p-5 w-screen  top-0 md:flex  flex-col  items-center">
      <div className=" md:flex items-center  md:justify-between  w-full  justify-between  relative">
        <div className=" flex items-center justify-between md:w-[200px] w-full">
          <VscMenu size={30} onClick={handleMenu} />
          <img
            className=" w-[83px]  md:ml-3 "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
            alt=""
          />
          <img
            className="w-9  md:hidden block mix-blend-multiply"
            src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg  "
            alt=""
          />
        </div>
        <div className=" text-center w-full md:w-6/12 md:block ">
          <div className=" md:block  w-full">
            <input
              value={searchQuerry}
              onChange={(e) => setsearchQuerry(e.target.value)}
              className=" md:w-5/6 w-4/6 p-2 border border-gray-300 rounded-l-full outline-none"
              type="text"
              placeholder=" Search"
              onFocus={() => setShow(true)}
              onBlur={() => setShow(false)}
            />

            <button className=" w-12 p-2 bg-gray-200  rounded-r-full px-1 inline-block ">
              <TfiSearch className=" inline-block items-center" />
            </button>
          </div>
          {show && (
            <div className=" absolute bg-white  mx-6  rounded-lg  z-10  ">
              <ul className=" flex flex-col w-[450px]  place-items-start gap-5  py-3 ">
                {suggestions.map((item) => (
                  <li className=" inline-block">
                    <BsSearch className=" inline-block mx-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className=" flex items-center justify-center mix-blend-multiply mx-2">
          <img
            className="w-9  md:block hidden"
            src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg  "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
