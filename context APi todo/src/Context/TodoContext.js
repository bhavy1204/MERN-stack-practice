import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 100,
            todo: "Learn java",
            completed: false,
        }
    ],
    // here we only write names not the full body of function
    addTodo : (todo)=>{},
    updateTodo : (todo,id)=>{},
    deleteTodo : (id)=>{},
    toggleComplete : (id)=>{},
});


export const useTodo = () =>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider

