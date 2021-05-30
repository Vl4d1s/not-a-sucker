import { LOAD_SEARCH_DATA, CLEAR_SEARCH_DATA } from "../actions/types";

const initialState = {
  isLoading: false,
  aliExpressData: null,
  searchKey: null,
  ebayData: null,
  amazonData: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_SEARCH_DATA:
      return {
        ...state,
        isLoading: payload.isLoading,
        searchKey: payload.searchKey,
        aliExpressData: payload.aliExpressData,
        ebayData: payload.ebayData,
        amazonData: payload.amazonData,
      };

    case CLEAR_SEARCH_DATA:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
