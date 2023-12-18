import { Text } from "@chakra-ui/react";
import { useTodo } from "../store";

const TotalTodos = () => {
  
  const count = useTodo(state=>state.todos.length)

  return <Text fontWeight="bold">Total: {count}</Text>;
};

export { TotalTodos };
