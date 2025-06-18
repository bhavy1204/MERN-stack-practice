import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function ToDOList() {
    let [todoList, updateToDo] = useState([{task:"kaam ", id:uuidv4()}]);
    let [newToDO, updateNewToDO] = useState("");

    let addNewTask = () => {
        updateToDo([...todoList,{task: newToDO, id:uuidv4()}]);
        updateNewToDO("");
    }

    let updateTaskValue = (event) => {
        updateNewToDO(event.target.value);
    }

    return (
        <div>
            <h2>To do list </h2>
            <input type="text" placeholder="Apna kaam likh idhar" value={newToDO} onChange={updateTaskValue} /> <br /> <br />
            <button onClick={addNewTask}>Add kar ab</button>
            <br />
            <hr />
            <ul>
                {todoList.map((todo) => (
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
        </div>
    )
}