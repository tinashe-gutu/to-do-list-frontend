export type status = "todo" | "done";

export interface ITodoItem {
  id?: number;
  name: string;
  summary: string;
  priority: string;
  status: status;
}

export type InputEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

export interface IEditTodoItem extends ITodoItem {
  edit: boolean;
}
