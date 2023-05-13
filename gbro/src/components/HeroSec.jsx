import React from "react";
import Hero from "../assets/Hero.jpeg";
import Dumbbell from '../assets/dumbbell .png'
import { styles } from "../styles";
const HeroSec = () => {
  return (
    <section className={`h-[1000px] flex flex-col items-center justify-end relative`}>
      <div
        className={`${styles.container}flex flex-col justify-center items-start `}
      >
        <div className={`flex flex-col items-start`}>
          <p className={`${styles.subText} font-bold uppercase w-[50%] text-white  `}>
           we provides a range of fitness services to help individuals achieve
            their health and fitness goals.
          </p>
          <h1 className={`${styles.mainText} `}>
            Everything is hard before it is easy
          </h1>
        </div>
        <h1 className=" text-white text-[100px] md:text-[140px] lg:text-[170px] absolute bottom-0 z-40 font-black uppercase text-left ">
          be limitless
        </h1>

        
      </div>
        <div className="w-[400px] h-[400px] rounded-full border-4 hidden md:block  border-orange-500 bg-transparent absolute right-6 top-[55px]"/>
         
          
        

      <img src={Hero} className=" w-full h-[600px] object-cover z-20" />
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
