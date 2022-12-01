import { ITodoItem } from "../utils/interfaces";

interface TodoProps {
  todoElement: ITodoItem;
}
export function Todo({ todoElement }: TodoProps): JSX.Element {
  return (
    <div className={todoElement.status}>
      <h4>{todoElement.name}</h4>
      <p>{todoElement.summary}</p>
      <button>Done</button>
    </div>
  );
}
