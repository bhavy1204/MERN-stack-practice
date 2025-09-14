import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice.js"

export default function Add() {

    const [input, setInput] = useState("")
    const dispatch = useDispatch();

    const TodoHandler = (e) => {
        e.preventDefault();
        // dispatcher me reducer call kar sakte hai. Aur agar us value ko access karna ho to action.payload se kar sakte hai.
        dispatch(addTodo(input))
        setInput("")
    }

    return (
        <>
            <form action="" onSubmit={TodoHandler}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">add</button>
            </form>
        </>
    )
}