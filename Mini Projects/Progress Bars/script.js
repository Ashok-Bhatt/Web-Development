
const progressBar = document.getElementById("progress");
let progress = 0;
let startProgress = null;

window.addEventListener("DOMContentLoaded", ()=>{

    waitToStart = setTimeout(()=>{
        startProgress = setInterval(()=>{
            progress = Math.min(100, progress + Math.ceil(Math.random()*10));
            progressBar.style.width = progress + "%";
            if (progress >= 100){
                clearInterval(startProgress);
                location.reload();
            }
        }, 100);
    },1000);

});