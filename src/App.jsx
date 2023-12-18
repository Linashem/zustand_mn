
import { Divider, VStack } from "@chakra-ui/react";
import { Filter } from "./components/Filter";
import { TotalTodos } from "./components/TotalTodos";
import { NewTodo } from "./components/NewTodo";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <>
      <VStack spacing={4}>
        <Filter />
        <TodoList />
        <Divider />
        <TotalTodos />
        <NewTodo/>
      </VStack>
    </>
  );
}

export default App;
