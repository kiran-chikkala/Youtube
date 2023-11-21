import React from "react";

const Chat = ({ name, chat }) => {
  return (
    <div className=" flex  items-center shadow-sm p-2 ">
      <img
        className=" w-9 mix-blend-multiply"
        src="	https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
        alt=""
      />
      <h1 className=" font-bold">{name}</h1>
      <p className=" mx-2">{chat}</p>
    </div>
  );
};

export default Chat;
