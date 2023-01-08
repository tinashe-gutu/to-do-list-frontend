import { MainContent } from "./MainContent";
import axios from "axios";
import { useEffect, useState } from "react";
import { ITodoItem } from "../utils/interfaces";
import "./App.css";
function App(): JSX.Element {
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);
  useEffect(() => {
    console.log("fetching");
    fetchTodoItems();
  }, []);

  async function fetchTodoItems() {
    const response = await axios.get(
      "https://tinashegutu-todo-list.onrender.com/items"
    );
    setTodoItems(response.data);
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
