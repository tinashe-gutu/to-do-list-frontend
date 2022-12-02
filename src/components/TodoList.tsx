import { Todo } from "./Todo";
import { ITodoItem } from "../utils/interfaces";

interface TodoListProps {
  todoItems: ITodoItem[];
  handleEditTicket: (ticket: ITodoItem) => void;
}

export function TodoList({
  todoItems,
  handleEditTicket,
}: TodoListProps): JSX.Element {
  return (
    <div>
      {todoItems.map((el: ITodoItem) => (
        <div key={el.id}>
          <Todo todoElement={el} handleEditTicket={handleEditTicket} />
        </div>
      ))}
      {todoItems.map((el: ITodoItem) => (
        <div key={el.id}>
          <Todo todoElement={el} handleEditTicket={handleEditTicket} />
        </div>
      ))}
    </div>
  );
}
