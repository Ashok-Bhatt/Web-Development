
const button1 = document.getElementById("btn");

button1.addEventListener("mousedown", ()=>{
    console.log("mouse down");
    button1.style.backgroundColor = "blue";
})

button1.addEventListener("click", ()=>{
    console.log("clicked!");
    button1.style.backgroundColor = "red";
})

button1.addEventListener("mouseup", ()=>{
    console.log("mouse up");
    button1.style.backgroundColor = "blue";
})