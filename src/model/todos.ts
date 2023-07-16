/* eslint-disable @typescript-eslint/no-floating-promises */
import { action, map, onMount, task } from "nanostores";
import { TodoItem } from "./types";

export const $todos = map<TodoItem[]>([]);

export const addTodo = action($todos, "addTodo", (store, payload: string) => {
  const prevState = store.get();
  store.set([
    { id: prevState.length + 1, title: payload, completed: false, userId: 1 },
    ...prevState,
  ]);

  return store.get();
});

export const removeTodo = action(
  $todos,
  "removeTodo",
  (store, payload: number) => {
    const prevState = store.get();
    store.set(prevState.filter((todo) => todo.id !== payload));

    return store.get();
  }
);

onMount($todos, () => {
  task(async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const result = (await response.json()) as TodoItem[];

      $todos.set(result.slice(0, 10));
    } catch (error) {
      // empty
    }
  });
});
