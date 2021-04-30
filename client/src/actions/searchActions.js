import axios from "axios";

export const searchForProduct = async (searchItem) => {
  try {
    console.log("searching!");
    const res = await axios.get(`/api/search/${searchItem}`);
    return res.data.data;
  } catch (error) {
    console.log("error", error);
  }
};
