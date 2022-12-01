import { TodoList } from "./TodoList";
import { AddTicket } from "./AddTicket";
import { useState } from "react";
import { ITodoItem } from "../utils/interfaces";
import { InputEvent } from "../utils/interfaces";

export function MainContent(): JSX.Element {
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([
    {
      id: 1,
      name: "clean",
      summary: "do some cleaning",
      priority: "low",
      status: "todo",
    },
  ]);
  const [formInput, setFormInput] = useState<ITodoItem>({
    id: todoItems[todoItems.length - 1].id ?? 1,
    name: null,
    summary: null,
    priority: null,
    status: "todo",
  });

  function handleAddTodoitem() {
    console.log("previous items:", todoItems);
    setTodoItems(() => [...todoItems, formInput]);
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
