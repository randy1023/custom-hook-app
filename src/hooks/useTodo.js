import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";
const initialState = [];
const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);



    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos) || []);
    }, [todos]);

    const handleNewTodo = (todo) => {
        if (todos.find((value) => value.description === todo.description)) return;
        const action = {
            type: "[TODO] Add Todo",
            payload: todo,
        };

        dispatch(action);


    };
    const handleToggleTodo = (id) => {
        console.log(id)
        const action = {
            type: "[TODO] Toggle Todo",
            payload: id,
        };
        dispatch(action);


    };
    const handleRemoveTodoById = (id) => {
        if (!id) return;
        const action = {
            type: "[TODO] Remove Todo",
            payload: id,
        };
        dispatch(action);

    };
    return {
        // variables
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,

        //methods
        handleNewTodo,
        handleToggleTodo,
        handleRemoveTodoById


    }
}
