import { useState } from "react"
import {useDispatch} from "react-redux"
import { addTodo } from "../features/todo/todoSlice";


const AddTodo = ()=>{

    const [task, setTask] =useState("");
    const dispatch = useDispatch();

    const addTask = (e)=>{
        e.preventDefault();
        dispatch(addTodo(task));
        setTask("");
    }

    return(
        <div className="add-todo-container">
            <input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}}/>
            <button onClick={addTask}>ADD TASK</button>
        </div>
    )

}

export default AddTodo;
