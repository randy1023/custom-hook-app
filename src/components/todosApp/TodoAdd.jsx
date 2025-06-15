import PropTypes from "prop-types";
import { useFormTodo } from "../../hooks";

export const TodoAdd = ({ onNewTodo }) => {
  const { inputValue, onChange, onSubmit } = useFormTodo(onNewTodo);
  return (
    <form>
      <input
        type="text"
        placeholder="¿Que hay que hacer ?"
        className="form-control"
        value={inputValue}
        onChange={onChange}
      />
      <button
        disabled={inputValue.length <= 0 ? true : false}
        onClick={onSubmit}
        className="btn btn-primary mt-2"
        type="submit"
      >
        Agregar
      </button>
    </form>
  );
};
TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};
