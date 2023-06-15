import React from "react";

const Navbar = () => {
  return (
    <div className="navbar h-[50px] bg-[#003580] flex justify-center">
      <div className="navContainer flex items-center justify-between w-[100%] max-w-[1024px] text-white">
        <span className="logo font-medium text-5xl">Bookinio</span>
        <div className="navItems">
          <button className="navButton font-bold rounded-md cursor-pointer hover:bg-[#0071c2] transition-all duration-300 ease-in-out hover:text-[#fff] bg-white ml-[20px] border-none py-[5px] px-[10px] text-[#003580]">
            Register
          </button>
          <button className="navButton font-bold rounded-md cursor-pointer hover:bg-[#0071c2] transition-all duration-300 ease-in-out hover:text-[#fff] bg-white ml-[20px] border-none py-[5px] px-[10px] text-[#003580]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
