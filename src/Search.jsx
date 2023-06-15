import React from "react";

const Search = () => {
  return (
    <div className="searchitem border-solid border-[#777] rounded-sm flex justify-between gap-[10px] mb-[20px]">
      <img
        src=""
        className="searchItemImg w-[200px] h-[200px] object-cover"
        alt="SearchItemImage"
      />
      <div className="sDesc flex flex-col gap-[10px] flex-[2]">
        <h1 className="sTitle text-[20px] font-[#0071c2]">
          {" "}
          Lorem, ipsum dolor.
        </h1>
        <span className="sDistance text-[12px]">Lorem ipsum dolor sit.</span>
        <span className="sTaxiOp text-[12px] bg-[#008009] text-white w-max p-[3px] rounded-sm">
          Lorem, ipsum.
        </span>
        <span className="sSubtitle text-[12px] font-bold">
          Lorem ipsum dolor sit amet.
        </span>
        <span className="sFeatures text-[12px]">
          Lorem ipsum dolor sit amet lrem
        </span>
        <span className="sCancelOp text-[12px] text-[#008009]  font-bold">
          Lorem, ipsum dolor.
        </span>
        <span className="sCancelOpSubtitle">
          Lorem ipsum dolor sit. Lorem ipsum dolor sit, amet consectetur
          adipisicing.
        </span>
      </div>
      <div className="sDetails flex flex-col justify-between flex-1">
        <div className="sRating flex justify-between">
          <span className="font-medium">Excellent</span>
          <button className="bg-[#0071c2] border-none text-white p-[5px] font-bold">
            8.9
          </button>
        </div>
        <div className="sDetailTexts text-right gap-[5px] flex flex-col">
          <span className="sPrice text-[24px]">$999</span>
          <span className="sTaxOp text-[12px] text-[#777]">
            Includes taxes and fees
          </span>
          <button className="sCheckBtn bg-[#0071c2] text-white font-bold p-[10px] border-none cursor-pointer rounded-sm">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
