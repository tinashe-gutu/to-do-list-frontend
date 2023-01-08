import { Todo } from "./Todo";
import { ITodoItem } from "../utils/interfaces";

interface TodoListProps {
  todoItems: ITodoItem[];
  handleEditTicket: (ticket: ITodoItem) => void;
  handleCompletedTicket: (ticket: ITodoItem) => void;
  fetchTodoItems: () => void;
}

export function TodoList({
  todoItems,
  handleEditTicket,
  handleCompletedTicket,
  fetchTodoItems,
}: TodoListProps): JSX.Element {
  return (
    <div className="todo-container">
      <div className="todoList-container">
        <h1>TODO TASKS</h1>
        {todoItems
          .filter((el) => el.status !== "done")
          .sort((a, b) => a.priority.localeCompare(b.priority))
          .map((el: ITodoItem) => (
            <div key={el.id} className="todo-task">
              <Todo
                todoElement={el}
                handleEditTicket={handleEditTicket}
                handleCompletedTicket={handleCompletedTicket}
                fetchTodoItems={fetchTodoItems}
              />
            </div>
          ))}
      </div>
      <div className="completed-container">
        <h1>COMPLETED</h1>
        {todoItems
          .filter((el) => el.status === "done")
          .sort((a, b) => a.priority.localeCompare(b.priority))
          .map((el: ITodoItem) => (
            <div key={el.id} className="completed-task">
              <Todo
                todoElement={el}
                handleEditTicket={handleEditTicket}
                handleCompletedTicket={handleCompletedTicket}
                fetchTodoItems={fetchTodoItems}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
