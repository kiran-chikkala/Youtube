import React from "react";
import { useDispatch } from "react-redux";
import { addVideosDetilas } from "../Redux/videoSlice";

const VideoCard = ({ info }) => {
  //
  const dispatch = useDispatch();

  const { snippet } = info;
  const { thumbnails, channelTitle } = snippet;
  return (
    <div
      className="shadow-xl w-88 rounded-3xl h-90 hover:shadow-2xl  "
      onClick={() => dispatch(addVideosDetilas(channelTitle))}
    >
      <img
        className=" w-full object-cover rounded-3xl"
        src={thumbnails.medium.url}
        alt=""
      />
      <div className=" px-3 py-2">
        <h1 className=" font-bold">{snippet.localized.title}</h1>
        <h5>{channelTitle}</h5>
        <h5>{info.statistics.viewCount} views</h5>
      </div>
    </div>
  );
};
export const HigherOrder = ({ info }) => {
  return (
    <div className=" ">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
