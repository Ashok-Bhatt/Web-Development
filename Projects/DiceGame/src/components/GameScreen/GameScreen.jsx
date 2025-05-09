"use strict";
import { useState } from "react";
import styles from "./GameScreen.module.css";
import SelectContainer from "../SelectContainer/SelectContainer";
import DiceContainer from "../DiceContainer/DiceContainer";

const GameScreen = ()=>{

    const [diceFace, useDiceFace] = useState(0);
    const [betNumber, useBetNumber] = useState(1);
    const [score, useScore] = useState(0);
    const [showRules, useShowRules] = useState(false);

    return (
        <div className={styles.main_container}>
            <div className={styles.game_container}>
                <div className={styles.score_container}>
                    <span className={styles.score_block}>{score}</span>
                    <span>Total Score</span>
                </div>
                <SelectContainer className={styles.select_container} betNumber={betNumber} useBetNumber={useBetNumber}/>
            </div>
            <DiceContainer showRules = {showRules} useShowRules = {useShowRules} score={score} useScore={useScore} diceFace={diceFace} useDiceFace={useDiceFace} betNumber={betNumber} useBetNumber={useBetNumber}/>
        </div>
    );
}

export default GameScreen;