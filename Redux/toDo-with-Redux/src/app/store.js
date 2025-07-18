import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../app/features/todo/todoSlice"

export const store = configureStore({
    reducer: todoReducer,
})