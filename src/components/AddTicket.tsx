import { InputEvent } from "../utils/interfaces";

interface AddTicketProps {
  handleChangedInput: (event: InputEvent) => void;
  handleAddTodoitem: () => void;
}

export function AddTicket({
  handleChangedInput,
  handleAddTodoitem,
}: AddTicketProps): JSX.Element {
  return (
    <div className="addticket-Container">
      <form action="" onSubmit={(e) => handleAddTodoitem()}>
        <input
          name="name"
          type="text"
          placeholder="name"
          onChange={(e) => {
            handleChangedInput(e);
          }}
        />
        <input
          name="summary"
          type="text"
          placeholder="summary"
          onChange={(e) => {
            handleChangedInput(e);
          }}
        />
        <select
          name="priority"
          onChange={(e) => {
            handleChangedInput(e);
          }}
        >
          <option value="">--Choose Priority--</option>
          <option value="high">High</option>
          <option value="middle">Middle</option>
          <option value="low">Low</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}
