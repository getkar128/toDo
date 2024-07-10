import { configureStore } from '@reduxjs/toolkit'
import toDoListReducer from './toDoListSlice'


export const store = configureStore({
    reducer: {
        toDoListReducer: toDoListReducer
    },
})