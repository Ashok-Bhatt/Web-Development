
let currentProgress = {
    "html" : 0,
    "css" : 0,
    "js" : 0
}

let finalProgress = {
    "html" : 80,
    "css" : 60,
    "js" : 50
}

// Progress bar variables
let htmlProgress, cssProgress, jsProgress;

// Info about HTML Progress Bar
const htmlBar = document.querySelector(".html-bar");
const htmlText = document.querySelector(".html-progress .progress-text");

// Info about CSS Progress Bar
const cssBar = document.querySelector(".css-bar");
const cssText = document.querySelector(".css-progress .progress-text");

// Info about JS Progress Bar
const jsBar = document.querySelector(".js-bar");
const jsText = document.querySelector(".js-progress .progress-text");

// Moving the progress bars
document.addEventListener("DOMContentLoaded", ()=>{

    htmlProgress = setInterval(()=>{
        if (currentProgress["html"] == finalProgress["html"]){
            clearInterval(htmlProgress);
        } else {
            currentProgress["html"]++;
            htmlText.textContent = `${currentProgress["html"]}%`;
            htmlBar.style.backgroundImage = `conic-gradient(red ${currentProgress["html"]*3.6}deg, white 0deg)`;
        }
    }, 25);

    cssProgress = setInterval(()=>{
        if (currentProgress["css"] == finalProgress["css"]){
            clearInterval(cssProgress);
        } else {
            currentProgress["css"]++;
            cssText.textContent = `${currentProgress["css"]}%`;
            cssBar.style.backgroundImage = `conic-gradient(green ${currentProgress["css"]*3.6}deg, white 0deg)`;
        }
    }, 25);

    jsProgress = setInterval(()=>{
        if (currentProgress["js"] == finalProgress["js"]){
            clearInterval(jsProgress);
        } else {
            currentProgress["js"]++;
            jsText.textContent = `${currentProgress["js"]}%`;
            jsBar.style.backgroundImage = `conic-gradient(blue ${currentProgress["js"]*3.6}deg, white 0deg)`;
            }
    }, 25);

});