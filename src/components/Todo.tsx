import { ITodoItem } from "../utils/interfaces";
import axios from "axios";

interface TodoProps {
  todoElement: ITodoItem;
  handleEditTicket: (ticket: ITodoItem) => void;
  handleCompletedTicket: (ticket: ITodoItem) => void;
}
export function Todo({
  todoElement,
  handleEditTicket,
  handleCompletedTicket,
}: TodoProps): JSX.Element {
  function handleDeleteTicket() {
    console.log(todoElement.id);
    axios.delete("http://localhost:4000/items/" + todoElement.id);
  }

  return (
    <div className={todoElement.status}>
      <h4>{todoElement.name}</h4>
      <p>{todoElement.summary}</p>
      <button onClick={() => handleCompletedTicket(todoElement)}>
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
