import { useSelector } from "react-redux"
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../app/features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handelDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    const handelComplete = (id) => {
        dispatch(markAsDone(id));
    }

    return (
        <>
            <h1>Todo app using redux</h1>
            <AddForm></AddForm>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.isDone ? <del>{todo.task}</del> : (todo.task)} ,
                        <button onClick={() => handelDelete(todo.id)}> Delete</button> ,
                        <button onClick={() => handelComplete(todo.id)}> Complete </button>
                    </li>
                ))}
            </ul>
        </>
    )
}