import { nanoid } from "nanoid";
import { create } from "zustand";

export const useTodo = create((set) => ({
  todos: [
    { id: 1, title: "Learn JS", completed: true },
    { id: 2, title: "Learn React", completed: false },
  ],
  loading: false,
  error: null,
//   addTodo: (title) =>
//     set((state) => {
//       const newTodo = { id: nanoid, title, completed: false };
//       return { todos: [...state.todos, newTodo] };
//     }),
addTodo: (title) => set(state =>({ todos: [...state.todos,{ id: nanoid, title, completed: false }]})
    ),
}));
