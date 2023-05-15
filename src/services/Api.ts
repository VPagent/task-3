import axios from "axios";

const BASE_URL = "https://universities.hipolabs.com/search?country=";

export const fetchData = async (value: string) => {
  const { data } = await axios.get(`${BASE_URL}${value}`);

  console.log(data);

  return data;
};
