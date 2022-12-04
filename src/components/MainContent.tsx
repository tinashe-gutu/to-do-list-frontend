import { TodoList } from "./TodoList";
import { AddTicket } from "./AddTicket";
import { useState } from "react";
import { ITodoItem, InputEvent, IEditTodoItem } from "../utils/interfaces";
import { EditTicket } from "./EditTicket";
import axios from "axios";

interface MainContentProps {
  todoItems: ITodoItem[];
  fetchTodoItems: () => void;
}
export function MainContent({
  todoItems,
  fetchTodoItems,
}: MainContentProps): JSX.Element {
  const [formInput, setFormInput] = useState<ITodoItem>({
    name: "",
    summary: "",
    priority: "",
    status: "todo",
  });
  const [editTicket, setEditTicket] = useState<IEditTodoItem>({
    edit: false,
    name: "",
    summary: "",
    priority: "",
    status: "todo",
  });

  function handleAddTodoitem() {
    const url = "https://tinashegutu-todo-list.onrender.com/items";
    axios.post(url, formInput);
    setFormInput(() => {
      fetchTodoItems();
      return formInput;
    });
  }
  function handleChangedInput(e: InputEvent) {
    setFormInput(() => {
      return { ...formInput, [e.target.name]: e.target.value };
    });
  }
  function completedTicket(ticket: ITodoItem) {
    axios.patch("https://tinashegutu-todo-list.onrender.com/items/" + ticket.id, {
      ...ticket,
      status: "done",
    });
    fetchTodoItems();
  }
  function handleEditTicket(ticket: ITodoItem) {
    setEditTicket(() => {
      return {
        id: ticket.id,
        edit: true,
        name: ticket.name,
        summary: ticket.summary,
        priority: ticket.priority,
        status: ticket.status,
      };
    });
  }
  return (
    <div className="main-container">
      {editTicket.edit && <EditTicket todoItem={editTicket} />}
      <h1>Todo List</h1>
      <AddTicket
        handleChangedInput={handleChangedInput}
        handleAddTodoitem={handleAddTodoitem}
        formInput={formInput}
      />
      <TodoList
        todoItems={todoItems}
        handleEditTicket={handleEditTicket}
        handleCompletedTicket={completedTicket}
      />
    </div>
  );
}
