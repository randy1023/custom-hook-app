import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks"

describe('test on useCounter.js', () => {
    const initialValue = 100;
    test('should return default value', () => {
        const { result } = renderHook(() => useCounter());

        const { counter, increment, decrement, reset } = result.current;
        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    })

    test('should generate the counter with parameter value', () => {
        const { result } = renderHook(() => useCounter(initialValue));
        const { counter } = result.current;
        expect(counter).toBe(initialValue);
    })

    test('should increment the counter', () => {
        const { result } = renderHook(() => useCounter(initialValue));
        const { increment } = result.current;
        act(() => {
            increment();
        }
        );
        const { counter } = result.current;
        expect(counter).toBe(initialValue + 1);
    })
    test('should decrement the counter', () => {
        const { result } = renderHook(() => useCounter(initialValue));
        const { decrement } = result.current;
        act(() => {
            decrement();
        }
        );
        const { counter } = result.current;
        expect(counter).toBe(initialValue - 1);
    })

    test('should reset  the counter', () => {
        const { result } = renderHook(() => useCounter(initialValue));
        const { increment, reset } = result.current;
        act(() => {
            increment();
            reset();
        }
        );
        const { counter } = result.current;
        expect(counter).toBe(initialValue);
    })
})