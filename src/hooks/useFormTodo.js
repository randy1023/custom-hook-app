import PropTypes from "prop-types"
import { useState } from "react";

export const useFormTodo = (onNewTodo) => {
    const [inputValue, setInputValue] = useState("");
    const onChange = (e) => {
        setInputValue(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.length <= 0) return;
        const inputValueClean = inputValue.trim();
        const todo = {
            id: new Date().getTime() + 100,
            description: inputValueClean,
            done: false,
        };
        onNewTodo(todo);
        setInputValue("");
    };
    return {
        //variables
        inputValue,

        //method
        onChange,
        onSubmit



    }
}

useFormTodo.propTypes = {
    onNewTodo: PropTypes.func.isRequired
}