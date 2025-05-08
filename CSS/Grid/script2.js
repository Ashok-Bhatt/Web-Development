
const container = document.querySelector(".container");
const btn = document.getElementById("btn");

let container_positions = ["stretch", "start", "end", "center"];
let item_positions = ["start", "center", "end", "space-evenly", "space-around", "space-between"]

btn.addEventListener("click", function(){

    let container_horizontal_position = container_positions[Math.floor(Math.random()*container_positions.length)];
    let container_vertical_position = container_positions[Math.floor(Math.random()*container_positions.length)];
    let item_horizontal_position = item_positions[Math.floor(Math.random()*item_positions.length)];
    let item_vertical_position = item_positions[Math.floor(Math.random()*item_positions.length)];

    container.style.justifyItems = container_horizontal_position;
    container.style.alignItems = container_vertical_position;
    container.style.justifyContent = item_horizontal_position;
    container.style.alignContent = item_vertical_position;
})