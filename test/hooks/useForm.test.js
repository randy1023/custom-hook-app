import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks";

describe('test on useForm.js', () => {
    const initialForm = {
        username: "",
        email: "",
        password: "",
    };
    test('should return default object', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { username, email, password, formState, onInputChange, onFormReset } = result.current;

        expect(formState).toEqual(initialForm);
        expect(username).toBe(initialForm.username);
        expect(email).toBe(initialForm.email);
        expect(password).toBe(initialForm.password);
        expect(onInputChange).toEqual(expect.any(Function));
        expect(onFormReset).toEqual(expect.any(Function));
    })
    test('should change name of form', () => {
        const newUsername = "randy";
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: "username", value: newUsername } });
        });

        const { username, formState } = result.current;
        expect(username).toBe(newUsername);
        expect(formState.username).toBe(newUsername);
    })
    test('should reset form value', () => {
        const newUsername = "randy";
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onFormReset } = result.current;

        act(() => {
            onInputChange({ target: { name: "username", value: newUsername } });
            onFormReset();
        });

        const { username, formState } = result.current;
        expect(username).toBe(initialForm.username);
        expect(formState.username).toBe(initialForm.username);
    })
})