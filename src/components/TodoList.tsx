import { Todo } from "./Todo";
import { ITodoItem } from "../utils/interfaces";

interface TodoListProps {
  todoItems: ITodoItem[];
  handleEditTicket: (ticket: ITodoItem) => void;
  handleCompletedTicket: (ticket: ITodoItem) => void;
}

export function TodoList({
  todoItems,
  handleEditTicket,
  handleCompletedTicket,
}: TodoListProps): JSX.Element {
  return (
    <div>
      <h1>TODO TASKS</h1>
      {todoItems
        .filter((el) => el.status !== "done")
        .map((el: ITodoItem) => (
          <div key={el.id}>
            <Todo
              todoElement={el}
              handleEditTicket={handleEditTicket}
              handleCompletedTicket={handleCompletedTicket}
            />
          </div>
        ))}
      <h1>COMPLETED TASKS</h1>
      {todoItems
        .filter((el) => el.status === "done")
        .map((el: ITodoItem) => (
          <div key={el.id}>
            <Todo
              todoElement={el}
              handleEditTicket={handleEditTicket}
              handleCompletedTicket={handleCompletedTicket}
            />
          </div>
        ))}
    </div>
  );
}
