
const nameContainer = document.querySelector("#name");
const heading = document.querySelector("h2");

nameContainer.addEventListener("keydown", ()=>{
    setInterval(()=>{
        heading.textContent = "Hello " + nameContainer.value;
    }, 0);
});