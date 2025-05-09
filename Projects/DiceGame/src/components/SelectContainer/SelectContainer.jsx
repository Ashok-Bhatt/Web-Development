"use strict";
import styles from "./SelectContainer.module.css";
import Block from "../Block/Block";

const SelectContainer = (props)=>{

    const arrNumber = [1, 2, 3, 4, 5, 6];

    return (
        <div className={styles.select_container}>
            <div className={styles.select_blocks}>
                {
                    arrNumber.map((value, index) => <Block key={index} value={value} betNumber={props.betNumber} useBetNumber = {props.useBetNumber} onClick={()=>props.useBetNumber(value)}/>
                    )
                }
            </div>
            <div style={{fontSize : "20px"}}>Select Number</div>
        </div>
    );
}

export default SelectContainer;