import React from "react";
import model from '../assets/model2.jpg'
import Container from "../hoc/Container";
import { styles } from "../styles";
import { Service } from "../Constants";



const Services = () => {
  return (
    <div className={`${styles.container} ${styles.space} lg:border-b-2 border-b-[#FA6A19] `}>
        <h1 className={`${styles.mainText} text-center`}>Our Services</h1>
      <div className="flex flex-col md:flex-row mt-16 md:mt-24 ">
      <div className="flex flex-col justify-center items-center md:w-[50%] ">
        <img className={`${styles.responsiveImg} py-1`} src={model} />
        <h1 className={`${styles.Text}`}>Your mind gives up before your legs do</h1>
      </div>
      <div className="md:w-[50%] flex flex-col items-center justify-evenly gap-3 mt-5" >
{Service.map((s , key)=>(
    <div key={key} >
        <h2 className="text-white text-xl md:text-3xl font-bold uppercase text-center">{s.title}</h2>
        <p className="text-gray-400 text-xs  md:text-lg text-center">{s.description}</p>
    </div>
))}
      </div>
      </div>
    </div>
  );
};

export default Container(Services , 'services') ;
