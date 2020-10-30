import { INCREASE_COUNTER, DECREASE_COUNTER } from "./types";

export const increaseCounter = (counter) => (dispatch) => {
  // console.log("++", counter);
  dispatch({
    type: INCREASE_COUNTER,
    payload: counter + 1,
  });
};

export const decreaseCounter = (counter) => (dispatch) => {
  // console.log("--", counter);
  dispatch({
    type: DECREASE_COUNTER,
    payload: counter - 1,
  });
};
