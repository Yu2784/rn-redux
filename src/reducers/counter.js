import { INCREASE_COUNTER, DECREASE_COUNTER } from "../actions/types";

const initialState = {
  counter: 0,
};

export default reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREASE_COUNTER:
      return {
        counter: state.counter + 1,
      };
    case DECREASE_COUNTER:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
