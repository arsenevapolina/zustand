import { create, StateCreator } from "zustand";

type CounterState = {
  counter: number;
};

type CounterActions = {
  increment: () => void;
  decrement: () => void;
};

const counterSlice: StateCreator<CounterState & CounterActions> = (
  set,
  get
) => ({
  counter: 0,
  decrement: () => {
    const { counter } = get();
    set({ counter: counter - 1 });
  },
  increment: () => {
    const { counter } = get();
    set({ counter: counter + 1 });
  },
  // actions - функции, к-е могут изменять значения, хранящиеся в Store
});

export const useCounterStore = create<CounterState & CounterActions>(
  counterSlice
);
