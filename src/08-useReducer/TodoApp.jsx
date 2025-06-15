import { TodoAdd, TodoList } from "../components";
import { useTodo } from "../hooks";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleToggleTodo,
    handleRemoveTodoById,
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp: {todosCount} pendientes: {pendingTodosCount}
      </h1>
      <hr />
      <div className="row">
        <TodoList
          todos={todos}
          onRemoveTodoById={handleRemoveTodoById}
          onToggleTodo={handleToggleTodo}
        />
        <div className="col-5">
          <h4>Agregar todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
