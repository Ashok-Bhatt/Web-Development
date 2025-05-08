
const btn = document.getElementById("btn");
const innerContainer = document.getElementById("inner-container")
const body = document.body;
const colorText = document.getElementById("hex");

const letters = "0123456789ABCDEF";

btn.addEventListener("click", function(){
    const color = getRandomColor();
    const invertColor = invertTheColor(color);
    innerContainer.style.backgroundColor = invertColor;
    body.style.backgroundColor = color;
    btn.style.backgroundColor = color;
    colorText.textContent = `Background Color : ${color}`;
});

function getRandomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function invertTheColor(color) {
    let invertColor = "#"
    for (let i = 1; i <= 6; i++) {
        let index = 15 - letters.indexOf(color[i]);
        invertColor += letters[index];
    }
    return invertColor;
}