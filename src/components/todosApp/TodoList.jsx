import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onRemoveTodoById, onToggleTodo }) => {
  return (
    <div className="col-7">
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemoveTodoById={onRemoveTodoById}
            onToggleTodo={onToggleTodo}
          />
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onRemoveTodoById: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};
