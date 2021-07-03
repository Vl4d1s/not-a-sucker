import axios from "axios";
import {
  LOAD_SEARCH_DATA,
  CLEAR_SEARCH_DATA,
  ERROR_SEARCH_DATA,
} from "./types";

export const searchForProduct = (searchItem) => async (dispatch) => {
  try {
    console.log("searching!");
    const res = await axios.get(`/api/search/${searchItem}`);

    dispatch({
      type: LOAD_SEARCH_DATA,
      payload: {
        isError: false,
        isLoading: true,
        aliExpressData: res.data.aliExpress,
        ebayData: res.data.ebay,
        amazonData: res.data.amazon,
        searchKey: searchItem,
      },
    });
    console.log("res:", res);
    console.log("res:", searchItem);
  } catch (error) {
    dispatch({
      type: ERROR_SEARCH_DATA,
      payload: {
        isError: true,
      },
    });
    console.log("error", error);
  }
};

export const clearSearchResults = () => (dispatch) => {
  try {
    dispatch({
      type: CLEAR_SEARCH_DATA,
    });
  } catch (error) {
    console.log("error", error);
  }
};
