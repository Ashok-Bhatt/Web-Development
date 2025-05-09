import { useContext, useState } from "react";
import UserContext from "../context/userContext";


const Login = ()=>{

    const {setUser} = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const userHandle = (e)=>{
        e.preventDefault();
        setUser({username, password});
    }

    return (
        <form onSubmit={userHandle}>
            Name:
            <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            Password:
            <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login;