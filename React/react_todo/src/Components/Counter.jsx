import React, {useState} from "react";
import "./counter.css"

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="counter-container">
            <p id="count">Counted {count} times.</p>
            <button id="count-btn" onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>
    )
}

export default Counter;