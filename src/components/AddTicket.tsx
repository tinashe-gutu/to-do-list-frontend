import { InputEvent, ITodoItem } from "../utils/interfaces";

interface AddTicketProps {
  handleChangedInput: (event: InputEvent) => void;
  handleAddTodoitem: () => void;
  formInput: ITodoItem;
}

export function AddTicket({
  handleChangedInput,
  handleAddTodoitem,
  formInput,
}: AddTicketProps): JSX.Element {
  return (
    <div className="addticket-container">
      <form
        action=""
        onSubmit={(e) => {
          handleAddTodoitem();
          e.preventDefault();
        }}
      >
        <input
          name="name"
          type="text"
          placeholder="name"
          onChange={(e) => {
            handleChangedInput(e);
          }}
          required
        />
        <input
          name="summary"
          type="text"
          placeholder="summary"
          onChange={(e) => {
            handleChangedInput(e);
          }}
          required
        />
        <select
          name="priority"
          onChange={(e) => {
            handleChangedInput(e);
          }}
          className={formInput.priority ?? ""}
          required
        >
          <option value="">--Choose Priority--</option>
          <option className="high" value="high">
            High
          </option>
          <option className="intermediate" value="intermediate">
            Middle
          </option>
          <option className="low" value="low">
            Low
          </option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}
