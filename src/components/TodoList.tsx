import { useStore } from "@nanostores/react";
import { $todos, addTodo } from "../model/todos";
import { TodoItem } from "./TodoItem";
import { Button, Input, VStack, chakra } from "@chakra-ui/react";
import { useState } from "react";

export const TodoList = () => {
  const todos = useStore($todos);
  const [todoTitle, setTodoTitle] = useState("");

  return (
    <div>
      <chakra.form
        padding="4"
        display="flex"
        gap="4"
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(todoTitle);
          setTodoTitle("");
        }}
      >
        <Input
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <Button type="submit">Add</Button>
      </chakra.form>

      <VStack spacing={2} justifyContent="start" alignItems="stretch">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </VStack>
    </div>
  );
};
