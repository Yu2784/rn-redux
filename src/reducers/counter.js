import { INCREASE_COUNTER, DECREASE_COUNTER } from "../actions/types";

const initialState = {
  counter: 0,
};

export default reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: payload,
      };
    case DECREASE_COUNTER:
      return {
        ...state,
        counter: payload,
      };
    default:
      return state;
  }
};
