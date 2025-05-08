
const button = document.querySelector("#btn");
let buttonRect = button.getBoundingClientRect();

let btnMarginX = buttonRect.width/2 + 100;
let btnMarginY = buttonRect.height/2 + 100;

button.addEventListener("click", ()=>{
    alert("Finally! you caught me");
    window.close();
});

window.addEventListener("mousemove", (e)=>{

    let x = e.clientX;
    let y = e.clientY;

    buttonRect = button.getBoundingClientRect();
    let btnX = buttonRect.left + buttonRect.width/2;
    let btnY = buttonRect.top + buttonRect.height/2;

    if (Math.abs(btnX-x)<=btnMarginX && Math.abs(btnY-y)<=btnMarginY){

        let newX = 0;
        let newY = 0;

        // changing coordiates of button
        if (btnX - x < 0){
            newX = x - 100;
        }
        if (btnX - x >= 0){
            newX = x + 100;
        }
        if (btnY - y < 0){
            newY = y - 100;
        }
        if (btnY - y >= 0){
            newY = y + 100;
        }

        // handling cases if button gets out of window
        if (newX < buttonRect.width/2){
            newX = window.innerWidth - buttonRect.width - 100;
        }

        if (newX + buttonRect.width/2 > window.innerWidth-100){
            newX = 100;
        }

        if (newY < buttonRect.height/2){
            newY = window.innerHeight - buttonRect.height - 100;
        }

        if (newY + buttonRect.height/2 > window.innerHeight-100){
            newY = 100;
        }

        button.style.top = newY+"px";
        button.style.left = newX+"px";
    }
});