"use strict";
import styles from "./IntroScreen.module.css";
import classNames from "classnames";

const IntroScreen = (props)=>{
    return (
        <div className={classNames(styles.main_container, props.className)}>
            <img src="images/dice.png" alt="Dice Background" className={styles.dice_image} />
            <div className={styles.intro_container}>
                <h2 className={styles.intro_heading}>Dice Game</h2>
                <button className={styles.start_button} onClick={()=>{props.setIsGameOn(!props.isGameOn)}}>Start Game</button>
            </div>
        </div>
    );
}

export default IntroScreen;