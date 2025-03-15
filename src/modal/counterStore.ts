import { create, StateCreator } from "zustand";

type CounterState = {
  counter: number;
};

const counterSlice: StateCreator<CounterState> = () => ({
  counter: 0,
  // начальное состояние стор
  // выписали описание state в отдельный slice
});

export const useCounterStore = create<CounterState>(counterSlice);
