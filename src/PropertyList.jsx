import React from "react";

const PropertyList = () => {
  return (
    <div className="pList w-[100%] max-w-[1024px] gap-[20px] flex justify-between">
      <div className="pListItem flex-1 rounded-sm overflow-hidden cursor-pointer">
        <img
          src=""
          className="pListImg w-[100%] h-[150px] object-cover"
          alt="Image"
        />
        <div className="pListTitle">
          <h1 className="text-[18px]">Hotels</h1>
          <h2 className="text-[14px] font-medium">222 Hotels</h2>
        </div>
      </div>
      <div className="pListItem flex-1 rounded-sm overflow-hidden cursor-pointer">
        <img
          src=""
          className="pListImg w-[100%] h-[150px] object-cover"
          alt="Image"
        />
        <div className="pListTitle">
          <h1 className="text-[18px]">Hotels</h1>
          <h2 className="text-[14px] font-medium">222 Hotels</h2>
        </div>
      </div>
      <div className="pListItem flex-1 rounded-sm overflow-hidden cursor-pointer">
        <img
          src=""
          className="pListImg w-[100%] h-[150px] object-cover"
          alt="Image"
        />
        <div className="pListTitle">
          <h1 className="text-[18px]">Hotels</h1>
          <h2 className="text-[14px] font-medium">222 Hotels</h2>
        </div>
      </div>
      <div className="pListItem flex-1 rounded-sm overflow-hidden cursor-pointer">
        <img
          src=""
          className="pListImg w-[100%] h-[150px] object-cover"
          alt="Image"
        />
        <div className="pListTitle">
          <h1 className="text-[18px]">Hotels</h1>
          <h2 className="text-[14px] font-medium">222 Hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
