
// Creating every required DOM Object for game page
const timeSliderBox = document.querySelector(".time-passed");
const timeRoller = document.querySelector(".timer");
const timerBox = document.querySelector(".inner-timer");
const moneyWon = document.querySelector(".won-money p");
const lockBtn = document.querySelector("#lock-btn");
const nextBtn = document.querySelector("#next-btn");
const quitBtn = document.querySelector("#quit-btn");
const levelContainers = document.querySelectorAll(".level");
const questionContainer = document.querySelector(".question");
const completionBox = document.querySelector(".prize-money-container");
const options = document.querySelectorAll(".option");
const firstOption = options[0];
const secondOption = options[1];
const thirdOption = options[2];
const fourthOption = options[3];
const lifelineButtons = document.querySelectorAll(".life-line");
const firstStage = document.querySelector(".level-5");
const secondStage = document.querySelector(".level-9");


// Creating all the game variables
let question_list = [];
let questions = [];
const moneyAmounts = getAllMoneyAmounts(levelContainers);
let questionNo = -1;
let level = 0;
let selectedOption = -1;
let totalTime = 45;
let remainingTime = 45;
let startCountDown;
let isLocked = false;
let isAnswered = false;
let lifeLinesUsed = 0;
let reviveLifeLines = false;
let activeOptions = [true, true, true, true];   // states whether i-th index option is active or not
let isDoubleDipped = false;     // tells if double dip life is used or not

// function to fetch all the questions from database
function fetchQuestions(){

    let http = new XMLHttpRequest();
    http.open("POST", "questions.php", true);

    http.onload = ()=>{
        if (http.readyState == 4 && http.status == 200){

            // fetching the response and performing opertaions on it
            let response = http.response;
            if (response != ""){
                let data = response.split("\n");
                for (let i=0; i<data.length; i++){
                    data[i] = data[i].split(",");
                }

                // now insertig the data into question_list
                for (let i=0; i<data.length; i++){
                    if (data[i].length == 6){
                        newItem = [];
                        for (let j=0; j<6; j++){
                            newItem.push(data[i][j]);
                        }
                        question_list.push(newItem);
                    }
                }

                questions = getAllQuestions(question_list)
                console.table(questions);
            }
        }
    }

    http.send();
}

// tracks the states of the life lines i.e. their regular images, image with cross, name of lifeline and their state whether they are active or not
const lifelines = {
    doubleDip : {
        image : "double_dip.png",
        cancelled_image : "cancelled_double_dip.png",
        name : "double-dip",
        isActive : true
    },
    fiftyFifty : {
        image : "50_50.png",
        cancelled_image : "cancelled_50_50.png",
        name : "50-50",
        isActive : true
    },
    skipTheQuestion : {
        image : "flip_the_question.png",
        cancelled_image : "cancelled_flip_the_question.png",
        name : "flip-the-question",
        isActive : true
    },
    jumpTheQuestion : {
        image : "jump_the_question.png",
        cancelled_image : "cancelled_jump_the_question.png",
        name : "jump-the-question",
        isActive : true
    },
    powerPaplu : {
        image : "power_paplu.png",
        cancelled_image : "cancelled_power_paplu.png",
        name : "power-paplu",
        isActive : true
    }
}

function logOut(){

    let http = new XMLHttpRequest();
    http.open("POST", "logout.php", true);

    http.onload = ()=>{
        if (http.readyState==4 && http.status==200){
            let response = http.response.trim();
            if (response == "1"){
                alert("System Logout!")
                location.href = "login.html";
            } else {
                alert("Some problem occured!");
            }
        }
    }

    http.send();

}

function loginCheck(){

    let http = new XMLHttpRequest();
    http.open("POST", "loginCheck.php", true);

    http.onload = ()=>{
        if (http.readyState==4 && http.status==200){
            let response = http.response.trim();
            if (response == "0"){
                location.href = "login.html";
            }
        }
    }

    http.send();

}

function gameCompleted(){

    let finalAmount = moneyWon.textContent;
    let textToShow = (finalAmount == "0 ₹") ? '<span style="font-size: 100px;">Unfortunatelly!</span><br> You won nothing only because you are good for nothing' : `<span style="font-size: 100px;">Congratulations!</span><br> You have won ${finalAmount}`;

    document.body.innerHTML = `<div class='prize-money-container'>
        <div>${textToShow}</div>
        <div class="btn-container">
        <button id="refresh-btn" onclick="location.reload()">New Game</button>
        <button id="logOut-btn" onclick="logOut()">Log Out</button>
        </div>
    </div>`

    let http = new XMLHttpRequest();
    http.open("POST", "update.php", true);
    http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    http.send(`score=${finalAmount}`);
}

function getAllMoneyAmounts(levelContainers){
    let amounts = [];
    for (let i of levelContainers){
        amounts.push(i.textContent);
    }
    return amounts;
}

function getAllQuestions(list){

    let questions = [];
    for (let i=0; i<list.length; i++){
        questions.push({
            "question" : list[i][0],
            "option-1" : list[i][1],
            "option-2" : list[i][2],
            "option-3" : list[i][3],
            "option-4" : list[i][4],
            "answer" : list[i][list[i][5].charCodeAt(0)-65+1]   // converting A,B,C,D to n = 1,2,3,4 and then accesing the list[questionNo][n] to get the answer option
        });
    }

    return questions;
}

function gameOver(){
    if (level<=5){
        moneyWon.innerHTML = "0 ₹";
    } else if (level<=9){
        moneyWon.innerHTML = firstStage.innerHTML;
    } else {
        moneyWon.innerHTML = secondStage.innerHTML;
    }
    gameCompleted();
}

function clearQuestionOptions(){
    questionContainer.innerHTML = "";
    for (let i=0; i<4; i++){
        options[i].innerHTML = "";
    }
}

function highlightMoney(){

    let borderColor = (level==6 || level==10) ? "red" : "gold";
    let borderSize = (level==6 || level==10) ? "3px" : "2px";

    if (level>1){
        levelContainers[level-2].style.cssText = `box-sizing : border-box; border : ${borderSize} solid ${borderColor}; box-shadow : none; background-image: linear-gradient(to right, rgb(25, 0, 214), rgb(0, 5, 146));`;
    }
    levelContainers[level-1].style.cssText = "box-sizing : content-box; border : 2px solid gold; box-shadow : 1px 1px 5px gold, -1px -1px 5px gold; background-image:none; background-color: #00ff00";
}

function setTimers(totalTime, timePassed, remainingTime){
    timeSliderBox.style.width = `${(timePassed*100)/totalTime}%`;
    timeRoller.style.backgroundImage = `conic-gradient(red 0deg, red ${(timePassed*180)/totalTime}deg, darkblue ${(timePassed*180)/totalTime}deg, darkblue 0deg)`;
    timerBox.innerHTML = (totalTime!=120) ? Math.ceil(remainingTime) : "∞";
}

function setTimings(){

    if (level<=4){
        totalTime = remainingTime = 45;
    } else if (level<=8){
        totalTime = remainingTime = 60;
    } else {
        totalTime = remainingTime = 120;
    }
}

function resetStates(){
    
    questionNo = -1;
    for (let i=0; i<4; i++){
        options[i].style.backgroundColor = "darkblue";
    }
    selectedOption = -1;
    setTimings();
    setTimers(totalTime, 0, totalTime);
    clearQuestionOptions();
}

function startTimer(){

    startCountDown = setInterval(()=>{
        remainingTime = remainingTime - 0.1;
        let timePassed = totalTime - remainingTime;
        setTimers(totalTime, timePassed, remainingTime);
        if (remainingTime<=0){
            clearInterval(startCountDown);
            startCountDown = null;
            remainingTime = totalTime;
            gameOver();
            setTimers(totalTime, 0, totalTime);
        }
    }, 100);

}

function checkAns(question_no){

    setTimeout(()=>{
        if (questions[question_no]["answer"] === questions[question_no][`option-${selectedOption+1}`]){
            options[selectedOption].style.backgroundColor = "#00ff00";
            setTimeout(()=>{
                if (level==15){
                    moneyWon.innerHTML = levelContainers[14].textContent;
                    gameCompleted();
                } else {
                    isAnswered = true;
                    resetStates();
                    moneyWon.innerHTML = levelContainers[level-1].textContent;
                    isDoubleDipped = false;
                }
            }, 250);
            if (questionNo>=0){
                questions.splice(questionNo, 1);    // Removing questionNo indexed question from questions
            }
        } else {
            options[selectedOption].style.backgroundColor = "red";
            if (isDoubleDipped){
                isDoubleDipped = false;
                activeOptions[selectedOption] = false;
                selectedOption = -1;
                isLocked = false;
                isAnswered = false;
                startTimer();
            } else {
                for (let i=0; i<4; i++){
                    if (questions[questionNo][`option-${i+1}`] === questions[questionNo]["answer"]){
                        options[i].style.backgroundColor = "#00ff00";
                    }
                }
                setTimeout(()=>{
                    gameOver();
                }, 250);
            }
        }
    }, 1000);
}

function getRandomOptions(){

    let arr = [];
    while (arr.length < 2){
        let optionNo = Math.floor(Math.random() * 4);
        if (questions[questionNo].answer != options[optionNo].textContent){
            if (arr.length==0 || (arr.length==1 && arr[0]!=optionNo)){
                arr.push(optionNo);
            }
        }
    }
    return arr;
}

function countAvailableOptions(){

    let count = 0;
    for (let i=0; i<4; i++){
        if (activeOptions[i] == true){
            count++;
        }
    }

    return count;
}

function useLifeLine(lifeline){

    let lifeLineName = lifeline.id;

    // Logic to revive a life line after using powerpaplu
    if (reviveLifeLines){
        if (lifeLineName!="powerPaplu" && !(lifelines[lifeLineName].isActive)){
            lifeLinesUsed--;
            lifelines[lifeLineName].isActive = true;
            reviveLifeLines = false;
            lifeline.innerHTML = `<img src="images/${lifelines[lifeLineName].image}" alt="image of ${lifelines[lifeLineName].name} life line">;`;
        }
        return;
    }

    // putting restrictions on using some lifelines in some cases
    if ( (lifeLineName=="jumpTheQuestion" && level==15) || (lifeLineName=="powerPaplu" && lifeLinesUsed==0) || (!reviveLifeLines && (lifelines[lifeLineName].isActive==false) || (lifeLineName=="doubleDip" || lifeLineName=="fiftyFifty") && countAvailableOptions()!=4) || lifeLinesUsed==4 || isDoubleDipped){
        return;
    }

    // preventing from using another life line if double-dip is used and one answer is already locked
    for (let i=0; i<4; i++){
        if (options[i].style.backgroundColor == "red"){
            return;
        }
    }

    // common effect of life lines
    lifeLinesUsed++;
    lifelines[lifeLineName].isActive = false;
    lifeline.innerHTML = `<img src="images/${lifelines[lifeLineName].cancelled_image}" alt="image of unavailable ${lifelines[lifeLineName].name} life line">;`;

    // functionality of flip the question life line
    if (lifeLineName === "skipTheQuestion"){
        // console.log(options[secondOption]);
        if (selectedOption!=-1){
            options[selectedOption].style.backgroundColor = "darkblue";
        }
        selectedOption = -1;
        generateQuestion();
    }

    // functionality of jump the question life line
    if (lifeLineName === "jumpTheQuestion"){

        if (selectedOption!=-1){
            options[selectedOption].style.backgroundColor = "darkblue";
        }
        selectedOption = -1;
        askQuestion();
    }

    // functionality of jump the question life line
    if (lifeLineName === "powerPaplu"){
        reviveLifeLines = true;
    }

    // functionality of 50:50 life line
    if (lifeLineName === "fiftyFifty"){

        let randomOptions = getRandomOptions();
        options[randomOptions[0]].innerHTML = options[randomOptions[1]].innerHTML = "";
        activeOptions[randomOptions[0]] = activeOptions[randomOptions[1]] = false;
        selectedOption = -1;
        for (let i=0; i<4; i++){
            options[i].style.backgroundColor = "darkblue";
        }
    }

    if (lifeLineName === "doubleDip"){
        isDoubleDipped = true;
    }
}

function generateQuestion(){

    questionNo = Math.floor(Math.random()*questions.length);    // fetching the question no
    questions.splice(questionNo, 1);    // Removing questionNo indexed question from questions
    questionContainer.innerHTML = questions[questionNo]["question"];
    firstOption.innerHTML = questions[questionNo]["option-1"];
    secondOption.innerHTML = questions[questionNo]["option-2"];
    thirdOption.innerHTML = questions[questionNo]["option-3"];
    fourthOption.innerHTML = questions[questionNo]["option-4"];

    for (let i=0; i<4; i++){
        activeOptions[i] = true;
    }

}

function askQuestion(){

    generateQuestion();
    level++;
    highlightMoney();

    if (totalTime != 120 && !startCountDown){
        startTimer();
    }
}

window.addEventListener("DOMContentLoaded", ()=>{
    loginCheck();
    fetchQuestions();
    timerBox.innerHTML = totalTime;
})

// Functionality of lock button
lockBtn.addEventListener("click", ()=>{
    if (selectedOption != -1){
        isLocked = true;
        if (startCountDown){
            clearInterval(startCountDown);
            startCountDown = null;
        }
        checkAns(questionNo);
    }
});


// Functionality of next button
nextBtn.addEventListener("click", ()=>{
    if (level==0 || (isLocked && isAnswered)){
        isLocked = false;
        isAnswered = false;
        nextBtn.innerHTML = "NEXT";
        askQuestion();
    }
});


// Functionality of quit button
quitBtn.addEventListener("click", ()=>{
    if (questionNo != -1 && !isLocked){
        gameCompleted();
    }
});

// creating onClick features for each lifeline
for (let i=0; i<lifelineButtons.length; i++){
    lifelineButtons[i].addEventListener("click", ()=>{
        let lifeLineName = lifelineButtons[i].id;
        if (questionNo!=-1 && !isLocked){
            useLifeLine(lifelineButtons[i]);
        }
    })
}

// Functionality on clicking the options button
for (let i=0; i<options.length; i++){
    options[i].addEventListener("click", ()=>{
        // ensuring that the option buttons are not clicked after time is over or any option is locked
        if ( (level>8 || remainingTime!=totalTime) && !isLocked && activeOptions[i]){
            if (selectedOption!=-1){
                options[selectedOption].style.backgroundColor = "darkblue";
            }
            selectedOption = i;
            options[i].style.backgroundColor = "#8888ff";
        }
    });
}