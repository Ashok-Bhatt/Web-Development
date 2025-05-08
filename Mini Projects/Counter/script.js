
const decrease_btn = document.getElementById("decrease");
const reset_btn = document.getElementById("reset");
const increase_btn = document.getElementById("increase");
const count = document.getElementById("counter");

decrease_btn.addEventListener('click', function(){
    let decreased_count = parseInt(count.textContent) - 1;
    if (decreased_count < 0){
        count.style.color = "red";
    }
    count.textContent = String(decreased_count);
})

reset_btn.addEventListener('click', function(){
    count.textContent = "0";
    count.style.color = "black";
})

increase_btn.addEventListener('click', function(){
    let increased_count = parseInt(count.textContent) + 1;
    if (increased_count > 0){
        count.style.color = "green";
    }
    count.textContent = String(increased_count);
})

