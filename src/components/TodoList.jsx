import { Checkbox, HStack, Stack, Text } from "@chakra-ui/react";
import { useFilter, useTodo } from "../store";

const Todo = ({ id, title, completed }) => {
  const toggleTodo = useTodo((state) => state.toggleTodo);
  return (
    <HStack spacing={4}>
      <Checkbox isChecked={completed} onChange={() => toggleTodo(id)} />
      <Text>{title}</Text>
    </HStack>
  );
};

const TodoList = () => {
  const filter = useFilter((state) => state.filter);
  const todos = useTodo((state) => {
    if (filter === "completed") {
      return state.todos.filter((todo) => todo.completed);
    } else if (filter === "uncompleted") {
      return state.todos.filter((todo) => !todo.completed);
    }
    return state.todos;
  });
  return (
    <Stack minH="300px">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </Stack>
  );
};

export { TodoList };
