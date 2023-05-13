import React, { useState } from "react";
import Female from "../assets/female.jpg";
import CalorieCal from "./CalorieCal";
import { useQuery } from "@tanstack/react-query";
import { styles } from "../styles";
import Container from "../hoc/Container";

const Bmi = () => {
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
    },
  };
  const url = `https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`;

  const { data,refetch, } = useQuery({
    queryKey: ["bmi"],
    queryFn: () => fetch(url, options).then((res) => res.json()),
  });

  return (
    <div className={`${styles.container} ${styles.space}`}>
      <div className="flex flex-col md:flex-row my-16 md:mt-24">
        <div className="md:w-[50%] flex flex-col gap-5 justify-start items-center">
          <h1 className=" text-white text-3xl  md:text-5xl font-bold uppercase text-center">
            Calculate your
            <span className="text-[#FA6A19] font-extrabold"> BMI</span>
          </h1>
          <input
            placeholder="AGE"
            className="w-80 p-2 border-none outline rounded-md placeholder:text-black focus:bg-[#FA6A19]"
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            placeholder="WEIGHT"
            className="w-80 p-2 border-none outline rounded-md placeholder:text-black focus:bg-[#FA6A19]"
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            placeholder="HEIGHT"
            className="w-80 p-2 border-none outline rounded-md placeholder:text-black focus:bg-[#FA6A19]"
            onChange={(e) => setHeight(e.target.value)}
          />

          <button
            onClick={() => refetch()}
            className="bg-orange-500 w-fit px-1 sm:px-2 text-base  md:px-3 lg:px-5 text-black uppercase py-2 font-bold rounded lg:w-40 lg:hover:w-48 ease-in-out duration-150 text-center"
          >
            Calculate
          </button>
          {data ? (
            <div className={`${styles.flexCol}`}>
              <h1 className="text-white">BMI: {data?.data?.bmi}</h1>
              <h1 className="text-white">Status:{data?.data?.health}</h1>
              <p className="text-white">
                Healthy Avarage: {data?.data["healthy_bmi_range"]}
              </p>
            </div>
          ) : null}
        </div>

        <div className="md:w-[50%] flex flex-col gap-2 justify-center items-center">
          <img
            src={Female}
            alt="Finess model"
            className={`${styles.responsiveImg}`}
          />
          <h1 className={`${styles.Text} text-center`}>
            Eliminate the mindset of cant because you can do anything.
          </h1>
        </div>
      </div>
      <CalorieCal />
    </div>
  );
};

export default Container(Bmi, "bmi");
