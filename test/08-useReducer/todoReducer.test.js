import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('test on todoReducer.js', () => {
    const action = {
        type: '',
        payload: {}
    };
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }];
    const newTodo = {
        id: 2,
        description: 'New Todo',
        done: false
    };
    test('should return state by default', () => {
        const newState = todoReducer(initialState, action);
        expect(newState).toEqual(initialState);
    })

    test('should add a todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(newTodo);

    })

    test('should update a todo done', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: initialState[0].id
        };
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBeTruthy();
    })

    test('should remove a todo', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: initialState[0].id
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    })
})