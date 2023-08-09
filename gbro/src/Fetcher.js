const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
  },
};

export const Fetcher = async (age, weight, height) => {
  try {
    const res = await fetch(
      `https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`,
      options
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
