import { ITodoItem } from "../utils/interfaces";
import axios from "axios";

interface TodoProps {
  todoElement: ITodoItem;
  handleEditTicket: (ticket: ITodoItem) => void;
  handleCompletedTicket: (ticket: ITodoItem) => void;
  fetchTodoItems: () => void;
}
export function Todo({
  todoElement,
  handleEditTicket,
  handleCompletedTicket,
  fetchTodoItems,
}: TodoProps): JSX.Element {
  async function handleDeleteTicket() {
    await axios.delete(
      "https://tinashegutu-todo-list.onrender.com/items/" + todoElement.id
    );
    fetchTodoItems();
  }

  return (
    <div className={(todoElement.status, todoElement.priority ?? "")}>
      <h4>{todoElement.name}</h4>
      <p>{todoElement.summary}</p>
      <button
        disabled={todoElement.status === "done"}
        onClick={() => handleCompletedTicket(todoElement)}
      >
        Complete
      </button>
      <button onClick={() => handleEditTicket(todoElement)}>Edit</button>
      <button
        onClick={() => {
          handleDeleteTicket();
        }}
      >
        Delete
      </button>
    </div>
  );
}
