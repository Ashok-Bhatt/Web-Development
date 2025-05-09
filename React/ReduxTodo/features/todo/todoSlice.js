import { createSlice, nanoid } from "@reduxjs/toolkit";

// initial state of a todos (along with the structure)
// const initialState = {
//     todos : [
//         {id : 1, text: 'Todo tasks'}
//     ]
// }

// initial state of todos
const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo : (state, action)=>{
            const todo = {
                id : nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo : (state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer