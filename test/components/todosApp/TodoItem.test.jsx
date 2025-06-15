import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../../src/components/todosApp/TodoItem"

describe('test on <TodoItem/>', () => {
    const todo = {
        id: 1,
        description: 'Demo Todo',
        done: false
    }
    const onRemoveTodoByIdMock = jest.fn();
    const onToggleTodoMock = jest.fn();
    beforeEach(() => {
        jest.clearAllMocks();
    })
    test('should render the component with the todo no completed', () => {
        render(<TodoItem todo={todo} onRemoveTodoById={onRemoveTodoByIdMock} onToggleTodo={onToggleTodoMock} />)

        const listElement = screen.getByRole('listitem');
        expect(listElement).toBeTruthy();
        expect(listElement.className).toBe("list-group-item d-flex justify-content-between")

        const spanElement = screen.getByLabelText('span');

        expect(spanElement).toBeTruthy();
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
        expect(screen.getByText(todo.description)).toBeTruthy();
        expect(screen.getByRole('button', { name: 'Borrar' })).toBeTruthy();

    })
    test('should show todo completed', () => {
        todo.done = true;
        render(<TodoItem todo={todo} onRemoveTodoById={onRemoveTodoByIdMock} onToggleTodo={onToggleTodoMock} />)
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    })

    test('should call onToggleTodo when click span', () => {
        render(<TodoItem todo={todo} onRemoveTodoById={onRemoveTodoByIdMock} onToggleTodo={onToggleTodoMock} />)
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
        expect(onToggleTodoMock).toHaveBeenCalledTimes(1);
    })
    test('should call onRemoveTodoByTodo when click button', () => {
        render(<TodoItem todo={todo} onRemoveTodoById={onRemoveTodoByIdMock} onToggleTodo={onToggleTodoMock} />)
        const buttonElement = screen.getByRole('button', { name: 'Borrar' });
        fireEvent.click(buttonElement);

        expect(onRemoveTodoByIdMock).toHaveBeenCalledWith(todo.id);
        expect(onRemoveTodoByIdMock).toHaveBeenCalledTimes(1);
    })
})

