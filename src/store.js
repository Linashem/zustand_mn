import { nanoid } from "nanoid";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
export const useTodo = create(persist((set, get) => ({
  todos: [
    { id: 1, title: "Learn JS", completed: true },
    { id: 2, title: "Learn React", completed: false },
  ],
  loading: false,
  error: null,

  addTodo: (title) => {
    const newTodo = { id: nanoid(), title, completed: false };
    set({ todos: [...get().todos, newTodo] });
  },
  toggleTodo: (todoId) =>
    set({
      todos: get().todos.map((todo) =>
        todoId === todo.id ? { ...todo, completed: !todo.completed } : todo
      ),
    }),
  
  fetchTodos: async () => {
    set({ loading: true });
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
      if (!res.ok) throw new Error("Failed to fetch! try again!");
      set({ todos: await res.json(), error: null });
    } catch (error) {
      set({ error: error.massage });
    } finally {
      set({ loading: false });
    }
  },
}),
{name:'some name'}
))

export const useFilter = create((set) => ({
  filter: "all",
  setFilter: (value) => set({ filter: value }),
}));
