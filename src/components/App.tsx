import { MainContent } from "./MainContent";
import axios from "axios";
import { useEffect, useState } from "react";
import { ITodoItem } from "../utils/interfaces";
function App(): JSX.Element {
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);
  useEffect(() => {
    fetchTodoItems();
  });
  function fetchTodoItems() {
    axios.get("http://localhost:4000/items").then((res) => {
      setTodoItems(res.data);
    });
  }
  return <MainContent todoItems={todoItems} fetchTodoItems={fetchTodoItems} />;
}

export default App;

/**
 * Possible features
 * Adding and editing todos
 * Marking todos as 'complete'
 * Deleting todos
 * Sorting todos by creation date
 * Setting a due date
 * Filtering overdue todos
 */
