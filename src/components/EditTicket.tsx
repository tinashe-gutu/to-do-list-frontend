import { useState } from "react";
import { IEditTodoItem, ITodoItem, InputEvent } from "../utils/interfaces";
import axios from "axios";

interface EditTicketProps {
  todoItem: IEditTodoItem;
}

export function EditTicket({ todoItem }: EditTicketProps): JSX.Element {
  const [editingTicket, setEditTicket] = useState<ITodoItem>({
    id: todoItem.id,
    name: todoItem.name,
    summary: todoItem.summary,
    status: todoItem.status,
    priority: todoItem.priority,
  });

  function handleChangedInput(e: InputEvent) {
    setEditTicket(() => {
      return { ...editingTicket, [e.target.name]: e.target.value };
    });
  }

  function handleSubmitEdit() {
    axios.patch(
      "http://localhost:4000/items/" + editingTicket.id,
      editingTicket
    );
  }
  return (
    <div className="editForm-container">
      <form action="" onSubmit={handleSubmitEdit} className="edit-form">
        <input
          type="text"
          name="name"
          value={editingTicket.name ?? ""}
          onChange={(e) => handleChangedInput(e)}
        />
        <textarea
          name="summary"
          value={editingTicket.summary ?? ""}
          onChange={(e) => handleChangedInput(e)}
        ></textarea>
        <select
          name="priority"
          value={editingTicket.priority ?? ""}
          onChange={(e) => handleChangedInput(e)}
        >
          <option>--Choose Priority--</option>
          <option className="high" value="high">
            High
          </option>
          <option className="middle" value="middle">
            Middle
          </option>
          <option className="low" value="low">
            Low
          </option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}
