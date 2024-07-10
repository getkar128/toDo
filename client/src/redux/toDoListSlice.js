import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosInstance } from "../config/axiosInstance"

const initialState = {
    loading: false,
    error: false,
    toDo: []
}

export const getAllTodos = createAsyncThunk(
    'getAllTodos',
    async () => {
        const response = await axiosInstance.get('/all')
        return response.data
    }
)

export const createToDo = createAsyncThunk(
    'createToDo',
    async ({ title, description, status }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/create', {
                title, description, status
            })
    
            return response.data
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const updateToDo = createAsyncThunk(
    'updatToDo',
    async ({ title, description, status, id }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.put(`/update/${id}`, {
                title,
                description,
                status
            });
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data)
            } else {
                return rejectWithValue(error.message)
            }
        }
      }
)

export const updateStatus = createAsyncThunk(
    'updateStatus',
    async ({ status, id }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.patch(`/update/${id}`, {
                status
            })
            return response.data
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data)
            } else {
                return rejectWithValue(error.message)
            }
        }
      }
)

export const deleteToDo = createAsyncThunk(
    'deleteToDo',
    async ({ id }) => {
        const response = await axiosInstance.delete(`/delete/${id}`)
        return response.data
    }
)

const toDoListSlice = createSlice({
    name: 'toDoList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllTodos.pending, (state) => {
            state.loading = true
            state.error = false
        })
        builder.addCase(getAllTodos.fulfilled, (state, action) => {
            const { data } = action.payload
            state.toDo = data.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
            state.loading = false
            state.error = false
        })
        builder.addCase(getAllTodos.rejected, (state) => {
            state.toDo = []
            state.loading = false
            state.error = true
        })
    }
})

export const { setShowToDoModal } = toDoListSlice.actions
export const selectTodoList = (state) => state.toDoListReducer
export const selectToDoById = (state, id) => state.toDoListReducer.toDo.find((item) => {
    console.log("this is", id)
    console.log(typeof(id))
    console.log(typeof(item?._id), item?._id)
    return item._id === id
})
export default toDoListSlice.reducer