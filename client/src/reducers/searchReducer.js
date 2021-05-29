import {
  START_LOADING,
  FINISH_LOADING,
  LOAD_SEARCH_DATA,
} from "../actions/types";

const initialState = {
  isLoading: true,
  aliExpressData: null,
  ebayData: null,
  amazonData: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case START_LOADING:
      return { ...state, isLoading: true };

    case FINISH_LOADING:
      return { ...state, isLoading: false };

    case LOAD_SEARCH_DATA:
      return {
        ...state,
        isLoading: false,
        aliExpressData: payload.aliExpressData,
        ebayData: payload.ebayData,
        amazonData: payload.amazonData,
      };

    default:
      return state;
  }
}
