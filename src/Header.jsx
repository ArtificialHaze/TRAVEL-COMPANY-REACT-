import React, { useState } from "react";
import { BiBed, BiTaxi } from "react-icons/bi";
import { ImAirplane } from "react-icons/im";
import { AiFillCar, AiOutlineCalendar } from "react-icons/ai";
import { FaBed } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [isOpenOptions, setIsOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [destination, setDestination] = useState("");

  const handleOptionSelect = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header relative bg-[#003580] text-white flex justify-center">
      <div
        className={`${
          type === "list"
            ? "w-[100%] max-w-[1024px] mx-[0px] my-[100px] listMode"
            : "w-[100%] max-w-[1024px] mx-[0px] my-[100px]"
        } `}
      >
        <div className="headerList mb-[50px] gap-[40px] flex">
          <div className="headerListItem active flex items-center gap-[10px]">
            <BiBed
              size={25}
              className="cursor-pointer hover:text-[#777] transition-all duration-300 ease-in"
            />
          </div>
          <div className="headerListItem flex items-center gap-[10px]">
            <ImAirplane
              size={25}
              className="cursor-pointer hover:text-[#777] transition-all duration-300 ease-in"
            />
          </div>
          <div className="headerListItem flex items-center gap-[10px]">
            <AiFillCar
              size={25}
              className="cursor-pointer hover:text-[#777] transition-all duration-300 ease-in"
            />
          </div>
          <div className="headerListItem flex items-center gap-[10px]">
            <FaBed
              size={25}
              className="cursor-pointer hover:text-[#777] transition-all duration-300 ease-in"
            />
          </div>
          <div className="headerListItem flex items-center gap-[10px]">
            <BiTaxi
              size={25}
              className="cursor-pointer hover:text-[#777] transition-all duration-300 ease-in"
            />
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="headerDesc my-[20px] mx-0 flex ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              corporis cumque quos consequuntur officia dignissimos nam quaerat
              possimus fugit non?
            </p>
            <button className="headerBtn bg-[#0071c2] border-none p-[10px] cursor-pointer rounded-sm font-medium text-white">
              Sign in / Register
            </button>
            <div className="headerSearch w-[100%] max-w-[1024px] h-[30px] rounded-sm absolute bottom-[-20px] bg-white border-solid border-3 border-yellow-500 items-center flex justify-around py-[10px] px-0">
              <div className="headerSearchItem flex items-center gap-[10px]">
                <FaBed className="text-[#777]" />
                <input
                  type="text"
                  placeholder="Search.."
                  className="headerSearchInput border-none text-black outline-none"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem flex items-center gap-[10px]">
                <AiOutlineCalendar className="text-[#777]" />
                <span
                  onClick={() => setIsOpenDate(!isOpenDate)}
                  className="headerSearchText text-[#888] cursor-pointer"
                >
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>
                {isOpenDate && (
                  <DateRange
                    className="date z-[2] absolute top-[50px]"
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem flex items-center gap-[10px]">
                <BsFillPersonFill className="text-[#777]" />
                <span
                  onClick={() => setIsOpenOptions(!isOpenOptions)}
                  className="headerSearchText text-[#777] cursor-pointer"
                >
                  {`${options.adult} adult | ${options.children} children | ${options.room} room.`}
                </span>
                {isOpenOptions && (
                  <div className="options z-[2] absolute top-[50px] bg-white text-[#888] shadow-sm rounded-sm">
                    <div className="optionItem flex w-[200px] justify-between m-[10px]">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter flex items-center gap-[10px] text-[12px] text-black">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton w-[30px] h-[30px] cursor-pointer text-[#0071c2] bg-white"
                          onClick={() => handleOptionSelect("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton w-[30px] h-[30px] cursor-pointer text-[#0071c2] bg-white"
                          onClick={() => handleOptionSelect("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem flex w-[200px] justify-between m-[10px]">
                      <span className="optionText">Children</span>
                      <div className="optionCounter flex items-center gap-[10px] text-[12px] text-black">
                        <button
                          disabled={options.children < 1}
                          className="optionCounterButton w-[30px] h-[30px] cursor-pointer text-[#0071c2] bg-white"
                          onClick={() => handleOptionSelect("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton w-[30px] h-[30px] cursor-pointer text-[#0071c2] bg-white"
                          onClick={() => handleOptionSelect("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem flex w-[200px] justify-between m-[10px]">
                      <span className="optionText">Room</span>
                      <div className="optionCounter flex items-center gap-[10px] text-[12px] text-black">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton w-[30px] h-[30px] cursor-pointer text-[#0071c2] bg-white"
                          onClick={() => handleOptionSelect("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton w-[30px] h-[30px] cursor-pointer text-[#0071c2] bg-white"
                          onClick={() => handleOptionSelect("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem flex items-center text-[#fff] font-bold bg-[#0071c2] p-[10px] rounded-md gap-[10px]">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
