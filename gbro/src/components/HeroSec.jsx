import React from "react";
import Female from "../assets/female.jpg";
import { styles } from "../styles";
const HeroSec = () => {
  return (
    <section className={`p-5 bg-white/95 rounded-b-2xl`}>
      <div className="flex items-start md:items-center md:justify-center">
        <h1
          className={`${styles.mainText} text-black text-left md:text-center w-[70%] md:w-[50%]`}
        >
          Everything <br />
          is hard before it is easy
        </h1>
      </div>

      <div className="w-full h-[600px]  relative">
        <img
          src={Female}
          className="w-full h-full object-cover border-2 border-black rounded-2xl"
        />
        <h1
          className={`text-6xl lg:text-9xl absolute left-0 bottom-0 px-1 text-white font-bold uppercase `}
        >
          be limitless
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <p
          className={` font-bold uppercase text-xl  md:text-3xl w-full md:w-[70%]  text-black`}
        >
          we are a fitness agency provides a range of fitness services to help
          individuals achieve their health and fitness goals.
        </p>
        <div className="font-bold text-sm md:text-base space-x-1">
          <a
            className="border-2 rounded-full border-black px-3 py-1"
            href="#bmi"
          >
            Calculate your bmi
          </a>
          <a className="border-2 rounded-full border-black px-3 py-1">
            About us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSec;
{
  /* <div className="md:w-[50%] flex flex-col gap-2 items-center justify-start" >


<button className=" w-fit mb-2 text-sm border-2 bg-transparent border-[#FA6A19] text-white p-2"><Link to={'/bmi'}> Start Your Journry </Link></button>

</div>
<div className="md:w-[50%] flex flex-col gap-2 justify-center items-center">

<h1 className=" text-[#FA6A19] text-3xl  md:text-5xl font-bold uppercase text-center" ></h1>
</div> */
}
