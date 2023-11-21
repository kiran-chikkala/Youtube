import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className=" font-semibold bg-gray-200 px-3 text-md py-2 rounded-lg text-black bg-opacity-30">
        {name}
      </button>
    </div>
  );
};

export default Button;
