import { changeByAmount, getCounter } from "../modal/counterStore";

export const addTen = () => {
  const counter = getCounter();
  if (counter < 0) {
    changeByAmount(-10);
  } else {
    changeByAmount(10);
  }
};
