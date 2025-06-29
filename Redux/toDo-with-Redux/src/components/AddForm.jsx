import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../app/features/todo/todoSlice";

export default function AddForm(){
    const [task,setTask] = useState("");
    const dispatch = useDispatch();



    const submitHandle = (event)=>{
        event.preventDefault();
        console.log(task);
        dispatch(addTodo(task))
        setTask("");
    }

    return(
        <>
            <div className="form">
                <form action="" onSubmit={submitHandle}>
                    <input type="text" onChange={(event) => setTask(event.target.value)}/>
                    <button>Add</button>
                </form>
            </div>
        </>
    )
}