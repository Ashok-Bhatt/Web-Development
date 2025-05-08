
let animator = null;
const diceFigures = ["\u2680", "\u2681", "\u2682", "\u2680", "\u2681", "\u2682"];
let diceNo = 0
let diceFace = diceFigures[diceNo];
let count = 0;

function rollDice(){
    
    document.getElementById("diceText").innerHTML = "";

    animator = setInterval( ()=>{
        if (count==25){
            clearInterval(animator);
        } else{
            diceNo = Math.floor(Math.random()*6);
            diceFace = diceFigures[diceNo]
            document.getElementById("diceFigure").innerHTML = `${diceFace}`;
            count++;
        }
    }, 40);

    setTimeout(()=>{
        document.getElementById("diceText").innerHTML = `You get ${diceNo+1}.`
    }, 1000);
}