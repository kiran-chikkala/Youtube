import React, { useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { addHomeMenu, removeMenu } from "../Redux/menuSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { GrDislike, GrLike } from "react-icons/gr";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const [searach] = useSearchParams();

  const store = useSelector((store) => store.video.details);
  useEffect(() => {
    dispatch(addHomeMenu());
  }, []);
  return (
    <div className="w-full ">
      <div className=" md:flex w-screen  p-3">
        <div className="">
          <iframe
            className=" rounded-2xl md:w-[950px] md:h-[450px]  w-[400px]  h-[300px]"
            src={
              "https://www.youtube.com/embed/" +
              searach.get("v") +
              "?&autoplay=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>{" "}
          <div className=" flex mt-2 items-center md:justify-between  border-t-2 border-b-2 border-gray-300 ">
            <div className=" flex items-center">
              <img
                className=" w-12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJMexYF87NXZ8_PcEVTWownsF6dyWiYHQyjUOeuPfzA&s"
                alt=""
              />
              <h1 className="  font-bold ">{store}</h1>
            </div>
            <button className=" px-2  py-1 ml-2  bg-slate-200   text-black  text-md rounded-xl">
              Subscribe
            </button>
            <div className="md:block hidden">
              <button className="bg-slate-200 px-2 py-1 rounded-xl mr-1">
                {" "}
                4.4k
                <GrLike
                  className=" text-center px-2 inline-block"
                  size={30}
                />{" "}
              </button>
              <button className=" inline-block bg-slate-200 px-2 py-1 rounded-xl">
                <GrDislike
                  className=" text-center px-2 inline-block"
                  size={30}
                />
              </button>
            </div>
          </div>
        </div>
        <div className=" w-full">
          <LiveChat />
        </div>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default WatchVideo;
