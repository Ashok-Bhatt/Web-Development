
// Creating every required DOM object for login page
const optionBtns = document.querySelectorAll(".option");
const loginOption = document.querySelector(".login-container");
const signInOption = document.querySelector(".signIn-container");
const highScores = document.querySelector(".high-scores");
const entryContainer = document.querySelector(".entry-container");
const entryBox = document.querySelector(".entries");
const scoreContainer = document.querySelector(".score-container");
const confirmField = document.querySelector(".confirm-field");
const btnContainer = document.querySelector(".btn-container");
const loginBtn = document.querySelector("#login-btn");
const signInBtn = document.querySelector("#signIn-btn");
const form = document.querySelector("#myForm");
const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");

// Creating some required variables
let tabNo = 0;
let userContainer = [];

const removeClass = (elements, className) => {
    for (let i=0; i<elements.length; i++){
        elements[i].classList.remove(className);
    }
}

const addClass = (elements, className) => {
    for (let i=0; i<elements.length; i++){
        elements[i].classList.add(className);
    }
}

const resetBackground = ()=>{

    // changes made in option Container's button
    for (let i=0; i<optionBtns.length; i++){
        if (i==tabNo){
            optionBtns[i].style.backgroundColor = "#eeeeee";
            optionBtns[i].style.borderBottom = "2px solid black";
        } else {
            optionBtns[i].style.backgroundColor = "rgba(255, 255, 255, 0.4)";
            optionBtns[i].style.border = "0";
        }
    }

    // changes made in login page
    if (tabNo == 0){
        removeClass([entryContainer, btnContainer, loginBtn], "hidden-component");
        addClass([confirmField, scoreContainer, signInBtn], "hidden-component");
    } else if (tabNo == 1){
        removeClass([entryContainer, confirmField, btnContainer, signInBtn], "hidden-component");
        addClass([scoreContainer, loginBtn], "hidden-component");
    } else {
        removeClass([scoreContainer], "hidden-component");
        addClass([entryContainer, btnContainer], "hidden-component");
    }
}

const showUsers = ()=>{

    entryBox.innerHTML = "";
    let rows = "";

    for (let i=0; i<userContainer.length; i++){
        rows = rows + '<div class="entry">';
        rows = rows + `<div class="usernameEntry">${userContainer[i].userName}</div>`;
        rows = rows + `<div class="highScoreEntry">${userContainer[i].userScore}</div>`;
        rows = rows + '</div>';
    }

    entryBox.innerHTML = rows;
}

const fetchUsers = (func)=>{

    let http = new XMLHttpRequest();
    http.open("POST", "fetch.php", true);

    http.onload = ()=>{
        if (http.readyState == 4 && http.status == 200){

            // fetching the response and performing opertaions on it
            let response = http.response;
            if (response != ""){
                let data = response.split("\n");
                for (let i=0; i<data.length; i++){
                    data[i] = data[i].split(",");
                }

                // removing all the previous content of userContainer
                userContainer.splice(0, userContainer.length);

                // now insertig the data into userContainer
                for (let i=0; i<data.length; i++){
                    if (data[i].length == 2){
                        let newItem = {
                            userName : data[i][0],
                            userScore : data[i][1]
                        }
                        userContainer.push(newItem);
                    }
                }
            }

            func();
        }
    }

    http.send();

}

// giving clicking event to every option button
for (let i=0; i<optionBtns.length; i++){
    optionBtns[i].addEventListener("click", ()=>{
        tabNo = i;
        resetBackground();
        if (i==2){ 
            fetchUsers(function(){
                showUsers();
            });
        } else{
            userName.value = "";
            password.value = "";
            confirm.value = "";
        }
    })
}

loginBtn.addEventListener("click", (e)=>{

    e.preventDefault();
    let nameValue = userName.value;
    let passwordValue = password.value;
    
    if (nameValue == "" || passwordValue == ""){
        alert("Empty field not acceptable");
    } else {
        let http = new XMLHttpRequest();
        let formData = new FormData(form);
        http.open("POST", "login.php", true);

        http.onload = ()=>{
            if (http.readyState==4 && http.status==200){
                let response = http.response.trim();
                if (response == "1"){
                    alert("Login Successfull!")
                    location.href = "http://localhost/PHP/Quiz%20Game/index.html";
                } else {
                    alert("Your username or password is incorrect!");
                }
            }
        }

        http.send(formData);
    }

});

signInBtn.addEventListener("click", (e)=>{

    e.preventDefault();
    let nameValue = userName.value;
    let passwordValue = password.value;
    let confirmValue = confirm.value;
    
    if (nameValue == "" || passwordValue == "" || confirmValue == ""){
        alert("Empty field not acceptable");
    } else if (passwordValue != confirmValue){
        alert("Password not matching!");
        password.value = "";
        confirm.value = "";
    } else {
        let http = new XMLHttpRequest();
        let formData = new FormData(form);
        http.open("POST", "signIn.php", true);

        http.onload = ()=>{
            if (http.readyState==4 && http.status==200){
                let response = http.response.trim();
                if (response == "1"){
                    alert("Account Created!");
                } else {
                    alert("Account with this username already exists!");
                }
                userName.value = "";
                password.value = "";
                confirm.value = "";
            }
        }

        http.send(formData);
    }

})