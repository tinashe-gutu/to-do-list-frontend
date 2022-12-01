import { TodoList } from "./TodoList";
import { AddTicket } from "./AddTicket";
import { useState } from "react";
import { ITodoItem } from "../utils/interfaces";
import { InputEvent } from "../utils/interfaces";
import axios from "axios";

interface MainContentProps {
  todoItems: ITodoItem[];
}
export function MainContent({ todoItems }: MainContentProps): JSX.Element {
  const [formInput, setFormInput] = useState<ITodoItem>({
    name: null,
    summary: null,
    priority: null,
    status: "todo",
  });

  function handleAddTodoitem() {
    const url = "http://localhost:4000/items";
    axios.post(url, formInput).then((res) => console.log(res));
  }
  function handleChangedInput(e: InputEvent) {
    setFormInput(() => {
      return { ...formInput, [e.target.name]: e.target.value };
    });
  }
  return (
    <div>
      <nav>
        <ul>
          <a href="/">Add ticket</a>
          <a href="/">List</a>
        </ul>
      </nav>
      <h1>Main Content</h1>
      <AddTicket
        handleChangedInput={handleChangedInput}
        handleAddTodoitem={handleAddTodoitem}
      />
      <TodoList todoItems={todoItems} />
    </div>
  );
}
