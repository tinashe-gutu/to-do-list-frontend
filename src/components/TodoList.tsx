import { Todo } from "./Todo";

export function TodoList(data: any): JSX.Element {
  return (
    <div>
      {data.map((el: any) => (
        <div key={el.id}>
          <Todo todoElement={el} />
        </div>
      ))}
    </div>
  );
}
