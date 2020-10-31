import { INCREASE_COUNTER, DECREASE_COUNTER } from "../actions/types";

const initialState = {
  counterReducer: 0,
};

export default reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREASE_COUNTER:
      return {
        counterReducer: payload,
      };
    case DECREASE_COUNTER:
      return {
        counterReducer: payload,
      };
    default:
      return state;
  }
};
