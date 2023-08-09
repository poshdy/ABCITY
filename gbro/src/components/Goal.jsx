import React, { useState } from "react";
import gain from "../assets/gain.jpg";
import loss from "../assets/loss.jpg";
import WeightGain from "./WeightGain";
import WeightLoss from "./WeightLoss";
import Container from "../hoc/Container";

const Goal = () => {
  const [goal, setGoal] = useState("");

  return (
    <div className="w-[80%] mx-auto mt-32">
      <h1 className="text-[#FA6A19] text-3xl   md:text-5xl font-bold uppercase text-center">
        What is Your Goal
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-4 justify-center mt-16 md:mt-24 ">
        <div
          onClick={() => setGoal("lose weight")}
          className="flex items-center flex-col justify-center gap-2"
        >
          <img
            className="w-[350px] h-[500px]  md:w-[500px] md:h-[600px] object-cover cursor-pointer"
            src={loss}
          />
          <h2 className="text-xl md:3xl text-[#FA6A19] font-bold">
            Lose Weight
          </h2>
        </div>
        <div
          onClick={() => setGoal("gain weight")}
          className="flex items-center flex-col justify-center gap-2"
        >
          <img
            className="w-[350px] h-[500px]  md:w-[500px] md:h-[600px] object-cover cursor-pointer"
            src={gain}
          />
          <h2 className="text-xl md:3xl text-[#FA6A19] font-bold">
            Gain Weight
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        {goal === "lose weight" ? (
          <WeightLoss />
        ) : goal === "gain weight" ? (
          <WeightGain />
        ) : (
          false
        )}
      </div>
    </div>
  );
};

export default Container(Goal, "nutrition");
