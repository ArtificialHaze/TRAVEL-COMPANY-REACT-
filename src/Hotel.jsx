import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { FiMapPin } from "react-icons/fi";
import MainList from "./MainList";
import Footer from "./Footer";
import { useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillCloseCircle,
} from "react-icons/ai";

const Hotel = () => {
  const images = [
    {
      src: "",
    },
    {
      src: "",
    },
    {
      src: "",
    },
    {
      src: "",
    },
    {
      src: "",
    },
    {
      src: "",
    },
  ];

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleSliderMove = (direction) => {
    let newSlideIndex;
    if (direction === "l") {
      newSlideIndex = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideIndex = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideIndex);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer flex-col flex items-center mt-[20px]">
        {open && (
          <div className="slider sticky top-0 left-0 w-[100vw] bg-black flex items-center h-[100vh] z-[999]">
            <AiOutlineArrowLeft
              size={25}
              onClick={() => handleSliderMove("l")}
              className="arrow m-[20px] cursor-pointer text-[#555]"
            />
            <AiOutlineArrowRight
              size={25}
              onClick={() => handleSliderMove("r")}
              className="arrow m-[20px] cursor-pointer text-[#555]"
            />
            <div className="sliderWrapper w-[100%] h-[100%] flex justify-center items-center">
              <img
                src={images[slideNumber]}
                alt="Image"
                className="sliderImg w-[80%] h-[80vh]"
              />
            </div>
            <AiFillCloseCircle
              onClick={() => setOpen(false)}
              size={20}
              className="closeIcon absolute top-[20px] right-[30px] text-[#555] cursor-pointer"
            />
          </div>
        )}
        <div className="hotelWrapper relative w-[100%] max-w-[1024px] flex-col gap-[10px]">
          <button className="bookNow absolute top-[10px] right-[0] border-none p-[10px] bg-[#0071c2] font-bold text-white rounded-sm cursor-pointer">
            Reserve or Book now
          </button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress text-[12px] flex items-center gap-[10px]">
            <FiMapPin />
            <span>Wall Str. 255</span>
          </div>
          <span className="hotelDistance text-[#0071c2] font-medium">
            Lorem, ipsum dolor - 250M from center
          </span>
          <span className="hotelPriceHighlight font-medium text-[#008009]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            dolorem.
          </span>
          <div className="hotelImage justify-between flex flex-wrap">
            {images.map((image, index) => (
              <div className="hotelImgWrapper w-[33%]" key={index}>
                <img
                  src={image.src}
                  onClick={() => handleOpen(index)}
                  alt="Image"
                  className="hotelImg w-[100%] object-cover"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails flex justify-between gap-[20px] mt-[20px]">
            <div className="hotelDetailsTexts flex-[3]">
              <h1 className="hotelTitle text-[24px]">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="hotelDesc text-[14px] mt-[20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus labore cum cupiditate provident ea aperiam aut corrupti
                illum eius similique!
              </p>
            </div>
            <div className="hotelDetailsPrices flex-[1] bg-[#ebf3ff] flex flex-col p-[20px] gap-[20px]">
              <h1 className="text-[18px] text-[#555]">
                Lorem ipsum dolor sit amet consectetur!
              </h1>
              <span className="text-[14px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Magnam, soluta.
              </span>
              <h2 className="font-light">
                <b>$999</b> (8 nights)
              </h2>
              <button className="border-none p-[10px] bg-[#0071c2] text-white cursor-pointer font-bold rounded-sm">
                Reserve or Book now!
              </button>
            </div>
          </div>
        </div>
        <MainList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
