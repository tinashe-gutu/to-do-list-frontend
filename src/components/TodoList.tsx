import { Todo } from "./Todo";
import { ITodoItem } from "../utils/interfaces";

interface TodoListProps {
  todoItems: ITodoItem[];
}

export function TodoList({ todoItems }: TodoListProps): JSX.Element {
  return (
    <div>
      {todoItems.map((el: ITodoItem) => (
        <div key={el.id}>
          <Todo todoElement={el} />
        </div>
      ))}
      {todoItems.map((el: ITodoItem) => (
        <div key={el.id}>
          <Todo todoElement={el} />
        </div>
      ))}
    </div>
  );
}
