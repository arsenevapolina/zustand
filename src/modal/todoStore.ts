import { create, StateCreator } from "zustand";

export type TodoType = {
  title: string;
  isComplete: boolean;
};

type TodoState = {
  todos: TodoType[];
};

type TodoActions = {
  addTodo: (value: string) => void;
  changeIsComplete: (index: number) => void;
};

const todoSlice: StateCreator<TodoState & TodoActions> = (set, get) => ({
  todos: [],
  addTodo: (value: string) => {
    const { todos } = get();
    set({ todos: [...todos, { title: value, isComplete: false }] });
  },
  changeIsComplete: (index: number) => {
    const { todos } = get();
    const newTodos: TodoType[] = [
      ...todos.slice(0, index),
      { ...todos[index], isComplete: !todos[index].isComplete },
      ...todos.slice(index + 1),
    ];
    set({ todos: newTodos });
  },
});

export const useTodoStore = create<TodoState & TodoActions>(todoSlice);
