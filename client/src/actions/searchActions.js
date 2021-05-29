import axios from "axios";
import { LOAD_SEARCH_DATA } from "./types";

export const searchForProduct = (searchItem) => async (dispatch) => {
  try {
    console.log("searching!");
    const res = await axios.get(`/api/search/${searchItem}`);

    dispatch({
      type: LOAD_SEARCH_DATA,
      payload: {
        aliExpressData: res.data.aliExpress,
        ebayData: res.data.ebay,
        amazonData: res.data.amazon,
      },
    });
    console.log("res:", res);
  } catch (error) {
    console.log("error", error);
  }
};
