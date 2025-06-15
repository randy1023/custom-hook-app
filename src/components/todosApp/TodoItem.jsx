import PropTypes from "prop-types";

export const TodoItem = ({ todo, onRemoveTodoById, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${todo.done === true ? "text-decoration-line-through" : ""}`}
        onClick={() => onToggleTodo(todo.id)}
        aria-label="span"
      >
        {todo.description}
      </span>
      <button
        onClick={() => onRemoveTodoById(todo.id)}
        className="btn btn-danger"
      >
        Borrar
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodoById: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};
