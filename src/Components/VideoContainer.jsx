import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/youtube";
import VideoCard, { HigherOrder } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addVideos } from "../Redux/videoSlice";
import { addHomeMenureturn } from "../Redux/menuSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();
  const FetchVideo = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
    dispatch(addVideos(json.items));
  };
  useEffect(() => {
    FetchVideo();
    dispatch(addHomeMenureturn());
  }, []);
  return (
    <div className=" grid md:grid-cols-3 grid-cols-1  w-full gap-4 ">
      {videos[0] && <HigherOrder info={videos[0]} />}
      {videos.map((item, i) => (
        <Link to={"/watch?v=" + item.id}>
          <VideoCard info={item} key={i} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
