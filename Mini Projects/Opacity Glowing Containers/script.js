
const containers = document.querySelectorAll(".container");

let opacity = 0, isIncreasing = true;

document.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{
        
        setInterval(()=>{
            for (let i=0; i<containers.length; i++){
                containers[i].style.opacity = opacity/10;
            }
    
            if (isIncreasing){
                opacity++;
            } else {
                opacity--;
            }
    
            if (opacity==0 || opacity==10){
                isIncreasing = !isIncreasing;
            }
        }, 200);

    }, 1000);
});