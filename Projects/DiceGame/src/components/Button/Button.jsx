"use strict";
import styles from './Button.module.css';

const Button = (props)=>{

    const {text, isDark, ...rest} = props;

    return (
        <button style={{background: (isDark) ? "black" : "white", color : (isDark) ? "white" : "black"}} {...rest}>{text}</button>
    );
}

export default Button;