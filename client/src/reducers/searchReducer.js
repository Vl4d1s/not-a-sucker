import {
  LOAD_SEARCH_DATA,
  CLEAR_SEARCH_DATA,
  ERROR_SEARCH_DATA,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isError: false,
  aliExpressData: null,
  searchKey: "",
  ebayData: null,
  amazonData: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_SEARCH_DATA:
      console.log(`payload.isLoading:${payload.isLoading}`);
      console.log("here!");
      return {
        ...state,
        isLoading: payload.isLoading,
        searchKey: payload.searchKey,
        aliExpressData: payload.aliExpressData,
        ebayData: payload.ebayData,
        amazonData: payload.amazonData,
      };

    case ERROR_SEARCH_DATA:
      console.log(`Error searching data`);
      return {
        ...initialState,
        isError: payload.isError,
      };

    case CLEAR_SEARCH_DATA:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
