import { Checkbox, HStack, Stack, Text } from "@chakra-ui/react";
import { useTodo } from "../store";

const Todo = ({ id, title, completed }) => {
  return (
    <HStack spacing={4}>
      <Checkbox isChecked={completed} />
      <Text>{title}</Text>
    </HStack>
  );
};

const TodoList = () => {
  const todos = useTodo(state=>state.todos)

  return (
    <Stack minH="300px">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </Stack>
  );
};

export { TodoList };
