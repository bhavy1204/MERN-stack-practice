import { createSlice, nanoid } from '@reduxjs/toolkit'

// reducer aur actions ke bundel ko slice bolte hai.
const initialState = {
    todos: [{ id: "1", task: "Eat", isDone: false }]
}

export const todosSlice = createSlice({
    name: "todo",
    initialState,
    // Reducers are object of functions (they are like event handlers )
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false
            }
            // Redux allows direct mutation in array unlike react where we first have to de-structure arrya than add new value and than copy.
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        markAsDone: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    todo.isDone = true;
                }
            });
        }
    }
})

export const { addTodo, deleteTodo, markAsDone } = todosSlice.actions;
export default todosSlice.reducer;