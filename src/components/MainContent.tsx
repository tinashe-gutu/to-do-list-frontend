import { TodoList } from "./TodoList";

export function MainContent() {
  return (
    <div>
      <nav>
        <ul>
          <a href="">Add ticket</a>
          <a href="">List</a>
        </ul>
      </nav>
      <h1>Main Content</h1>
      <TodoList />
    </div>
  );
}
