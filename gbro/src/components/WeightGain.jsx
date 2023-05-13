import React from "react";

const WeightGain = () => {
  return (
    <div className="text-white text-center mt-10">
      <div className="flex flex-col items-center border-2 border-[#FA6A19] p-3">
        <div className="flex flex-col items-center my-8">
          <h2 className="text-[#FA6A19] text-lg   md:text-2xl font-bold uppercase text-center]">
            Breakfast (706 calories)
          </h2>
          <p>2 servings Vegan Freezer Breakfast Burritos</p>
          <p>1 cup strawberries</p>
        </div>
        <div className="flex flex-col items-center my-8">
          <h2 className="text-[#FA6A19] text-lg   md:text-2xl font-bold uppercase text-center]">
            Snack (246 calories)
          </h2>
          <p>1 serving Almond-Honey Power Bar</p>
        </div>
        <div className="flex flex-col items-center my-8">
          <h2 className="text-[#FA6A19] text-lg   md:text-2xl font-bold uppercase text-center]">
            Lunch (649 calories)
          </h2>
          <p>2 servings Vegetable & Tuna Pasta Salad</p>
          <p>1 cup mango chunks</p>
        </div>
        <div className="flex flex-col items-center my-8">
          <h2 className="text-[#FA6A19] text-lg  md:text-2xl font-bold uppercase text-center]">
            Snack 2 (200 calories)
          </h2>
          <p>1 large apple</p>
          <p>1 Tbsp. natural peanut butter</p>
        </div>
        <div className="flex flex-col items-center my-8">
          <h2 className="text-[#FA6A19] text-lg  md:text-2xl font-bold uppercase text-center]">
            Dinner (715 calories)
          </h2>
          <p>1 serving Sheet-Pan Maple-Mustard Pork Chops and Carrots</p>
          <p>1 1/2 cups Easy Brown Rice</p>
        </div>

        <div className="flex flex-col items-center my-8">
          <h2 className="text-[#FA6A19] text-lg  md:text-2xl font-bold uppercase text-center]">
            Daily Totals: 2,516 calories, 105 g protein, 343 g carbohydrates, 46
            g fiber, 88 g fat, 2,557 mg sodium
          </h2>
          <p>
            To make it 2,000 calories: Omit the peanut butter from the P.M.
            snack and omit the rice from dinner.
          </p>
          <p>
            To make it 3,000 calories: Add an extra Almond-Honey Power Bar to
            the A.M. snack, add an extra 2 Tbsp. peanut butter to the P.M.
            snack, and add an extra ½ cup brown rice to dinner.
          </p>
        </div>
      </div>
      <h2 className="text-center font-bold">Note: This Nutrition plan is not accurate it is just for educational purpose :)</h2>
    </div>
  );
};

export default WeightGain;
