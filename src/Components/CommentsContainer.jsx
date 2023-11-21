import React from "react";
const CommentsData = [
  {
    name: "XYZ",
    comment: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "XYZ",
    comment: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "XYZ",
        comment: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "XYZ",
        comment: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "XYZ",
        comment: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "XYZ",
    comment: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "XYZ",
        comment: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "XYZ",
    comment: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "XYZ",
        comment: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "XYZ",
        comment: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "XYZ",
    comment: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];
const CommentsContainer = () => {
  const SingleComment = ({ data }) => {
    const { name, comment } = data;
    return (
      <>
        <div className=" flex  items-center">
          <img
            className=" w-9"
            src="	https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
            alt=""
          />
          <h1>{name}</h1>
        </div>{" "}
        <p>{comment}</p>
      </>
    );
  };
  const CommentList = ({ data }) => {
    return data.map((item, i) => (
      <div key={i}>
        {" "}
        <SingleComment data={item} />
        <div className="  pl-5 border border-l-black ml-5">
          <CommentList data={item.replies} />
        </div>
      </div>
    ));
  };
  return (
    <div className="  mx-10">
      {" "}
      <h1 className=" font-bold ">Comments</h1>
      <CommentList data={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
