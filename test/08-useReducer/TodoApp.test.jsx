import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useTodo } from "../../src/hooks/useTodo"
jest.mock('../../src/hooks/useTodo');
describe('test on <TodoApp/>', () => {
    const todos = [
        { id: 1, description: 'Demo Todo', done: false },
        { id: 2, description: 'Demo Todo 2', done: false }
    ];
    const todosCount = todos.length;
    const pendingTodosCount = todos.filter(todo => !todo.done).length;
    const handNewTodoMock = jest.fn();
    const handleToggleTodoMock = jest.fn();
    const handleRemoveTodoByIdMock = jest.fn();
    beforeEach(() => {
        jest.clearAllMocks();
    })
    test('should render the component', () => {
        useTodo.mockReturnValue({
            todos,
            todosCount,
            pendingTodosCount,
            handleNewTodo: handNewTodoMock,
            handleToggleTodo: handleToggleTodoMock,
            handleRemoveTodoById: handleRemoveTodoByIdMock,
        });
        render(<TodoApp />)
        const liElement = screen.getAllByRole('listitem');
        expect(screen.getByText('Demo Todo')).toBeTruthy();
        expect(screen.getByText('Demo Todo 2')).toBeTruthy();
        expect(liElement.length).toBe(todos.length);
    })
})