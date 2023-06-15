import React from "react";

const MainList = () => {
  return (
    <div className="mail w-[100%] mt-[50px] bg-[#003580] text-white flex flex-col items-center gap-[20px] p-[50px]">
      <h1 className="mailTitle">Save time and money!</h1>
      <span className="mailDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
        eius.
      </span>
      <div className="mailInputContainer">
        <input
          type="text"
          className="w-[300px] h-[50px] p-[10px] border-none mr-[10px] rounded-sm"
          placeholder="Type here.."
        />
        <button className="h-[50px] w-[150px] bg-[#0071c2] font-medium text-white rounded-sm cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default MainList;
