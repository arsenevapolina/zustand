import { StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { create } from "../helpers/create";
import { getCoffeeList } from "./cofeeStore";

type SearchState = {
  text?: string;
};

type SearchActions = {
  setText: (text: string) => void;
};

const searchSlice: StateCreator<
  SearchState & SearchActions,
  [
    ["zustand/devtools", never]
    //   ["zustand/persist", unknown]
  ]
> = (set) => ({
  text: undefined,
  setText: (text) => {
    set({ text }, false, "setText");
  },
});

export const useSearchStore = create<SearchActions & SearchState>()(
  devtools(searchSlice, { name: "searchStore" })
);

useSearchStore.subscribe((state, prevState) => {
  if (state.text !== prevState.text) {
    getCoffeeList({ text: state.text });
  }
});
