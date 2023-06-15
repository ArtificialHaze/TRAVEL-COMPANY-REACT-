import React from "react";

const FeaturedProperties = () => {
  return (
    <div className="fp w-[100%] max-w-[1024px] flex justify-between gap-[20px]">
      <div className="fpItem flex flex-col flex-1 gap-[10px]">
        <img src="" alt="Image" className="fpImg w-[100%]" />
        <span className="fpName font-bold">Lorem, ipsum dolor.</span>
        <span className="fpCity font-medium">
          Lorem, ipsum dolor. Lorem, ipsum.
        </span>
        <span className="fpPrice font-semibold">
          Lorem, ipsum dolor Lorem, ipsum. lrem.
        </span>
        <div className="fpRating">
          <button className="bg-[#003590] text-white border-none mr-[10px] p-[3px] font-bold">
            8.9
          </button>
          <span className="text-[14px]">Excellent</span>
        </div>
      </div>
      <div className="fpItem flex flex-col flex-1 gap-[10px]">
        <img src="" alt="Image" className="fpImg w-[100%]" />
        <span className="fpName font-bold">Lorem, ipsum dolor.</span>
        <span className="fpCity font-medium">
          Lorem, ipsum dolor. Lorem, ipsum.
        </span>
        <span className="fpPrice font-semibold">
          Lorem, ipsum dolor Lorem, ipsum. lrem.
        </span>
        <div className="fpRating">
          <button className="bg-[#003590] text-white border-none mr-[10px] p-[3px] font-bold">
            8.9
          </button>
          <span className="text-[14px]">Excellent</span>
        </div>
      </div>
      <div className="fpItem flex flex-col flex-1 gap-[10px]">
        <img src="" alt="Image" className="fpImg w-[100%]" />
        <span className="fpName font-bold">Lorem, ipsum dolor.</span>
        <span className="fpCity font-medium">
          Lorem, ipsum dolor. Lorem, ipsum.
        </span>
        <span className="fpPrice font-semibold">
          Lorem, ipsum dolor Lorem, ipsum. lrem.
        </span>
        <div className="fpRating">
          <button className="bg-[#003590] text-white border-none mr-[10px] p-[3px] font-bold">
            8.9
          </button>
          <span className="text-[14px]">Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
