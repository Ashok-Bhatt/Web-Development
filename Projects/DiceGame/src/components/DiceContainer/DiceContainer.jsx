"use strict";
import styles from "./DiceContainer.module.css";
import Button from "../Button/Button";
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from "react-icons/fa";

const DiceContainer = (props)=>{

    const diceFaces = [<FaDiceOne/>, <FaDiceTwo/>, <FaDiceThree/>, <FaDiceFour/>, <FaDiceFive/>, <FaDiceSix/>];

    let gameRules = "Select any number. Click on dice image. \nAfter clicking on dice if the face of dice is same as the selected number then triple the number points will be added to score else that no of points will be reduced."

    let diceRollEvent = null;

    const rollDice = ()=>{
        if (diceRollEvent === null){
            let count = 0, diceNumber = 1;
            diceRollEvent = setInterval(() => {
                diceNumber  = Math.ceil(Math.random()*6);
                props.useDiceFace(diceNumber-1);
                count++;
                if (count == 10){
                    clearInterval(diceRollEvent);
                    if (diceNumber == props.betNumber){
                        props.useScore(props.score + props.betNumber*3);
                    } else {
                        props.useScore(props.score - props.betNumber);
                    }
                }
            }, 50);
        }
    }

    return (
        <div className={styles.dice_container}>
            <button className={styles.dice} onClick={rollDice}>{diceFaces[props.diceFace]}</button>
            <div className={styles.click_instruction}>Click on Dice to roll</div>
            <Button className={styles.reset_button} text="Reset Score" isDark={false} onClick={()=>{props.useScore(0)}}/>
            <Button className={styles.show_rules_button} text={props.showRules ? "Hide Rules" : "Show Rules"} isDark={true} onClick={()=>props.useShowRules(!props.showRules)}/>
            <div className={styles.rules_container} style={{visibility : (props.showRules ? "visible" : "hidden")}}>
                <h3>How to play dice game</h3>
                <div className={styles.rules_list}>
                    <p>Select any Number</p>
                    <p>Click on dice image</p>
                    <p>After clicking on dice if the face of dice is same as the selected number then triple the number points will be added to score else that no of points will be reduced</p>
                </div>
            </div>
        </div>
    );
}

export default DiceContainer;