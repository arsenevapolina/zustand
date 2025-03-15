import { devtools } from "zustand/middleware";
import { CoffeeType } from "../types/coffeetypes";
import { create, StateCreator } from "zustand";
import axios from "axios";

const BASE_URL = "https://purpleschool.ru/coffee-api";

type CoffeeState = {
  coffeeList?: CoffeeType[];
};

type CoffeeActions = {
  getCoffeeList: () => void;
};

const coffeeSlice: StateCreator<
  CoffeeActions & CoffeeState,
  [["zustand/devtools", never]]
> = (set) => ({
  coffeeList: undefined,
  getCoffeeList: async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      set({ coffeeList: data });
    } catch (error) {
      console.log(error);
    }
  },
});

export const useCoffeeStore = create<CoffeeActions & CoffeeState>()(
  devtools(coffeeSlice)
);
