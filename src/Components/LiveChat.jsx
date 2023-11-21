import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../Redux/ChatSlice";
import { AiOutlineSend } from "react-icons/ai";
import generate from "../utils/Helper";

const LiveChat = () => {
  const [text, settext] = useState("");
  const dispatch = useDispatch();
  const store = useSelector((store) => store?.LiveChat?.chaList);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addChat({
          name: generate(),
          chat: "Hey!! welcome to my youtude app",
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className=" md:w-10/12  w-12/12  h-[400px] md:mt-0 mt-2 md:h-[550px] ml-2 p-2 border-l border-r border-t border-gray-300   rounded-lg overflow-y-scroll flex flex-col-reverse">
        {store.map((item) => (
          <Chat name={item?.name} chat={item?.chat} />
        ))}
      </div>

      <form
        className=" md:w-10/12 w-full ml-2 flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addChat({ name: "kiran", chat: text }));
          settext("");
        }}
      >
        <input
          value={text}
          placeholder=" Join the Chat Noe"
          onChange={(e) => settext(e.target.value)}
          className="w-full outline-none border-b border-l  border-gray-300"
          type=" text"
        />
        <button className="px-3 py-1  ">
          <AiOutlineSend size={35} className=" inline-block" />
        </button>
      </form>
    </>
  );
};

export default LiveChat;
