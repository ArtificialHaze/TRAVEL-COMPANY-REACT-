import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Featured from "./Featured";
import PropertyList from "./PropertyList";
import FeaturedProperties from "./FeaturedProperties";
import MainList from "./MainList";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="mt-[50px] flex flex-col items-center gap-[30px]">
        <Featured />
        <h1 className="homeTitle w-[1024px] text-[20px]">
          Browse by property type
        </h1>
        <PropertyList />
        <h1 className="homeTitle w-[1024px] text-[20px]">Homes guests love</h1>
        <FeaturedProperties />
        <MainList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
