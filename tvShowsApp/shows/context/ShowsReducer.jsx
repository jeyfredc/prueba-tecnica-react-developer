import { types } from "../../types/types";




export const showsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.list:
      return {
        ...state,
        seriesListt: action.payload,
      };

    default:
      return state;
  }
};
