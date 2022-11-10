import React from "react";
import Buttons from "./Buttons";
import Content from "./Content";
import CostomerDetails from "./CostomerDetails";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="w-full bg-gray-100">
      <Navbar />
      <div className="flex flex-wrap">
        <div className="p-4 w-full lg:w-1/2">
            <Buttons/>
            <Content />
        </div>
        <div className=" mt-10 p-5 w-full lg:w-1/2">
          <CostomerDetails />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
