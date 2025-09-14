import React, { use } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, } from "../features/todo/todoSlice.js"

export default function Todo() {

    // use seector me state ki value access kar sakte hai ek call back ke jariye.
    const todos = useSelector((state) => state.todos);

    const dispatch = useDispatch();

    return (
        <>
            <div className="">

            </div>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.text}
                    <button onClick={() => dispatch(removeTodo(todo.id))} >X</button>
                </li>
            ))}
        </>
    )
}