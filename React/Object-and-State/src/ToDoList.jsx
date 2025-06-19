import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function ToDOList() {
    let [todoList, updateToDo] = useState([{ task: "kaam ", id: uuidv4() }]);
    let [newToDO, updateNewToDO] = useState("");

    let addNewTask = () => {
        updateToDo((prevToDo) => {
            return [...prevToDo, { task: newToDO, id: uuidv4() }]
        });
        updateNewToDO("");
    }

    let updateTaskValue = (event) => {
        updateNewToDO(event.target.value);
    }

    // In react we will always use filter method to delete from array. 
    let taskDelete = (id) => {
        // console.log("ID : "+id)
        // Todo filter is returning the array copy which does not conatin that task and we are passing it on to the updateToDo method to update the original array. 
        updateToDo(todoList.filter((todo) => todo.id != id))
    }

    let upperCase = () => {
        updateToDo((prevToDO) => {
            return prevToDO.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                }
            })
        }
        )
        console.log(ToDOList);
    }

    let singleUpperCase = (id) => {
        updateToDo((prevTask) => {
            return prevTask.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toLowerCase()
                    }
                } else {
                    return todo;
                }
            })
        })
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
                    <li key={todo.id}>
                        <span>
                            {todo.task}  &nbsp;
                            {/* Here we used arrow function otherwise if we just wrote it with arguments than that would be funcction call and execcuted immediatley */}
                            <button onClick={() => taskDelete(todo.id)}>Delete</button> &nbsp; &nbsp;
                             <button onClick={() => singleUpperCase(todo.id)}>Ya lowerCase karle</button>
                        </span>
                        <br />
                    </li>
                ))}
            </ul>
            <hr />
            <span> <button onClick={upperCase}>UpperCase karle</button>  &nbsp;</span>
        </div>
    )
}

// Version 1 notes :-
// I’ve used useState to manage:
// todoList: the array of tasks, each with a task string and a unique id using uuidv4().
// newToDO: the current input value in the textbox.
// The updateTaskValue function captures user input using event.target.value and updates newToDO. This makes the input a controlled component.
// When the Add button is clicked, addNewTask:
// Spreads the existing todoList,
// Appends a new task object {task: newToDO, id: uuidv4()},
// Then resets newToDO to an empty string to clear the input.