"use strict";
import styles from "./ButtonComponent.module.css";
import classNames from "classnames";
const ButtonComponent = (props)=>{

    const {isDark, isSubmitButton, className, icon, text, ...rest} = props;
    const backgroundColor = isDark ? "black" : "white";
    const foregroundColor = isDark ? "white" : "black";

    return(
        <button {...rest} type={isSubmitButton ? "Submit" : "button"} style={{background: backgroundColor, color: foregroundColor}} className={classNames(styles.button, className)}>
            {icon} {text}
        </button>
    );
}

export default ButtonComponent;