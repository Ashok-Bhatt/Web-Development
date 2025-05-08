
const balls = document.querySelectorAll(".ball");

for (let i = 0; i < balls.length; i++) {
    balls[i].addEventListener("click", () => {
        // balls[i].style.opacity = 0;
        balls[i].style.display = "none";
    });
}