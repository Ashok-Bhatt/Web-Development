import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const TodoList = ()=>{

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            {
                todos.map((todo, index)=>(
                    <div className="todo" key={todo.id}>
                        <div>{todo.text}</div>
                        <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
                    </div>
                ))
            }
        </>
    )
}

export default TodoList;