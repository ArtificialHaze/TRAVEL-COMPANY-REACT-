import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Search from "./Search";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer flex justify-center mt-[20px]">
        <div className="listWrapper w-[100%] max-w-[1024px] flex gap-[20px]">
          <div className="listSearch flex-1 bg-[#febb02] p-[10px] rounded-sm sticky h-max">
            <h1 className="listSearchTitle text-[20px] text-[#555] font-bold mb-[10px]">
              Search
            </h1>
            <div className="listItem flex flex-col mb-[10px] gap-[5px]">
              <label className="text-[12px]" htmlFor="">
                Destination
              </label>
              <input className="h-[30px] p-[5px] border-none" type="text" />
            </div>
            <div className="listItem flex flex-col mb-[10px] gap-[5px]">
              <label className="text-[12px]" htmlFor="">
                Check-in-date
              </label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="h-[30px] p-[5px] w-[300px] bg-white flex items-center cursor-pointer"
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            <div className="listItem flex flex-col mb-[10px] gap-[5px]">
              <label htmlFor="">Options</label>
              <div className="listOptionItem flex justify-between mb-[10px] text-[#555] text-[12px]">
                <span className="listOptionText">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="listOptionInput w-[50px]" />
              </div>
              <div className="listOptionItem flex justify-between mb-[10px] text-[#555] text-[12px]">
                <span className="listOptionText">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="listOptionInput w-[50px]" />
              </div>
              <div className="listOptionItem flex justify-between mb-[10px] text-[#555] text-[12px]">
                <span className="listOptionText">Adult</span>
                <input
                  min={1}
                  type="number"
                  placeholder={options.adult}
                  className="listOptionInput w-[50px]"
                />
              </div>
              <div className="listOptionItem flex justify-between mb-[10px] text-[#555] text-[12px]">
                <span className="listOptionText">Children</span>
                <input
                  min={0}
                  type="number"
                  placeholder={options.children}
                  className="listOptionInput w-[50px]"
                />
              </div>
              <div className="listOptionItem flex justify-between mb-[10px] text-[#555] text-[12px]">
                <span className="listOptionText">Room</span>
                <input
                  min={1}
                  type="number"
                  placeholder={options.room}
                  className="listOptionInput w-[50px]"
                />
              </div>
            </div>
            <button className="p-[10px] bg-[#0071c2] text-white border-none w-[100%] cursor-pointer font-medium">
              Search
            </button>
          </div>
          <div className="listResult flex-3">
            <Search />
            <Search />
            <Search />
            <Search />
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
