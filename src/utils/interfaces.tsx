export type status = "todo" | "done";

export interface ITodoItem {
  id: number;
  name: string | null;
  summary: string | null;
  priority: string | null;
  status: status;
}

export type InputEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>;
