
const fruitsSelector = document.querySelector("#fruits");
const result = document.querySelector("#result");
const resultbtn = document.querySelector("#result-btn");
let selectedFruit;

resultbtn.addEventListener("click", () => {

    for (let i=0; i<fruitsSelector.options.length; i++) {
        if (fruitsSelector.options[i].selected){
            selectedFruit = i;
        }
    }

    result.textContent = fruitsSelector.options[selectedFruit].value;
});