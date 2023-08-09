import React from "react";

import oldman from "../assets/oldman.jpg";
import {
  Bmi,
  Footer,
  Goal,
  HeroSec,
  Navbar,
  Services,
} from "../components";

const Home = () => {
  return (
    <div className="w-full bg-[#060606]">
      <Navbar />
      <HeroSec />
      <Services />
      <Bmi />
      <Goal />
      <div className="mt-24">
        <div className="w-[80%] mx-auto flex  justify-center items-center ">
          <div className=" flex flex-col  gap-2 items-center justify-center">
            <img
              alt="old man"
              src={oldman}
              className=" w-[400px] h-[550px]  md:w-[620px] md:h-[700px] object-cover"
            />
            <h1 className="  text-[#FA6A19] text-3xl  md:text-5xl font-bold uppercase text-center">
              Age is Just a Number
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

