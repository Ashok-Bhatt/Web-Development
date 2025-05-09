"use strict";
import styles from "./Block.module.css"

const Block = (props)=>{

    const {value, betNumber, useBetNumber, ...rest} = props;
    return (
        <button className={(betNumber==value) ? styles.selected_block : styles.block} {...rest}>{value}</button>
    );
}

export default Block;