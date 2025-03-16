import { StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import { create } from "../helpers/create";

type CounterState = {
  counter: number;
  persisedCounter: number;
};

type CounterActions = {
  increment: () => void;
  decrement: () => void;
  changeByAmount: (value: number) => void;
  resetStore: () => void;
};

const initialState = {
  counter: 0,
  persisedCounter: 0,
};

const counterSlice: StateCreator<
  CounterState & CounterActions,
  [["zustand/persist", unknown]]
> = (set, get) => ({
  counter: 0,
  persisedCounter: 0,
  resetStore: () => {
    set(initialState);
  },
  decrement: () => {
    const { counter, persisedCounter } = get();
    set({ counter: counter - 1, persisedCounter: persisedCounter - 1 });
  },
  increment: () => {
    const { counter, persisedCounter } = get();
    set({ counter: counter + 1, persisedCounter: persisedCounter + 1 });
  },
  changeByAmount: (value: number) => {
    const { counter } = get();
    set({ counter: counter + value });
  },
});

export const useCounterStore = create<CounterState & CounterActions>()(
  persist(counterSlice, {
    name: "counterStore",
    partialize: (state) => ({ persisedCounter: state.persisedCounter }),
  })
);

export const changeByAmount = (value: number) =>
  useCounterStore.getState().changeByAmount(value);
export const getCounter = () => useCounterStore.getState().counter;
