import { useContext } from "react";
import UserContext from "../context/userContext";


const WelcomeScreen = ()=>{

    const {user} = useContext(UserContext)

    if (user) return <div>Welcome! {user.username}</div>
    return <div>Please Login</div>
}

export default WelcomeScreen;