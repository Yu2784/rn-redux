import { INCREASE_COUNTER, DECREASE_COUNTER } from "./types";

export const increaseCounter = () => {
  return {
    type: INCREASE_COUNTER,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREASE_COUNTER,
  };
};
