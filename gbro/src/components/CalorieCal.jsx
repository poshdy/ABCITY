import React, { useState } from "react";
import Male from "../assets/male.jpg";
import { useQuery } from "@tanstack/react-query";
import { styles } from "../styles";

const CalorieCal = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [activitylevel, setActivtyLevel] = useState("");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
    },
  };
  const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activitylevel}`;

  const { data, refetch } = useQuery({
    queryKey: ["cal"],
    queryFn: () => fetch(url, options).then((res) => res.json()),
  });

  return (
    <div className={`${styles.container} ${styles.space}`}>
      <div className={"flex flex-col md:flex-row mt-16 md:mt-24"}>
        <div className="md:w-[50%] flex flex-col gap-2 justify-center items-center">
          <img
            src={Male}
            alt="Finess model"
            className={`${styles.responsiveImg}`}
          />
          <h1 className={`${styles.Text} text-center`}>
            Turn a setback into a comeback.
          </h1>
        </div>
        <div className="md:w-[50%] flex flex-col gap-2 justify-start items-center mt-10">
          <h1 className=" text-white text-3xl  md:text-5xl font-bold uppercase text-center">
            Daily Calorie
            <span className="text-[#FA6A19] font-extrabold"> Calculator</span>
          </h1>
          <input
            placeholder="AGE"
            className="w-80 p-2 border-none outline rounded-md placeholder:text-black focus:bg-[#FA6A19]"
            onChange={(e) => setAge(e.target.value)}
          />
          <select
            className="w-80 p-2 border-none outline rounded-md placeholder:text-black focus:bg-[#FA6A19]"
            onChange={(e) => setGender(e.target.value)}
          >
            <option>GENDER</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <input
            placeholder="HEIGHT"
            className="w-80 p-2 border-none outline rounded-md placeholder:text-black focus:bg-[#FA6A19]"
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            placeholder="WEIGHT"
            className="w-80 p-2 border-none outline rounded-md placeholder:text-black focus:bg-[#FA6A19]"
            onChange={(e) => setWeight(e.target.value)}
          />
          <select
            style={{
              width: 120,
            }}
            onChange={(e) => setActivtyLevel(e.target.value)}
            placeholder="Activity Level"
          >
            <option value="level_1">1</option>
            <option value="level_2">2</option>
            <option value="level_3">3</option>
            <option value="level_4">4</option>
            <option value="level_5">5</option>
          </select>
          <button
            onClick={() => refetch()}
            className="bg-orange-500 text-black uppercase px-3 md:px-5 py-1 md:py-2 font-bold rounded w-fit md:w-40 md:hover:w-48 ease-in-out duration-150 text-center"
          >
            Calculate
          </button>
          {data ? (
            <div className={`${styles.flexCol}`}>
              <h1 className="text-white">Your BMR: {data?.data?.BMR}</h1>
              <h1 className="text-white">
                Maintain Weight:{" "}
                {data?.data?.goals?.["maintain weight"].toFixed()} cal
              </h1>
              <h1 className="text-white">
                Weight loss:{" "}
                {data?.data?.goals?.["Weight loss"]?.calory.toFixed()} cal
              </h1>
              <h1 className="text-white">
                Weight gain:{" "}
                {data?.data.goals?.["Weight gain"].calory.toFixed()} cal
              </h1>{" "}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CalorieCal;
