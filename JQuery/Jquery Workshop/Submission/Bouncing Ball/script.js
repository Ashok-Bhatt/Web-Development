$(document).ready(function () {
    const ball1 = $('#ball1');
    const ball2 = $('#ball2');
    const container = $('.container');
    const secondNeedle = $('.second-needle');
    let secondDegree = 0;
    let secondDegreeDelta = 6;
    let isUpdatingNeedle = false;

    function getRandomColor(){

        const hexadecimalDigit = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
        let color = "#"

        for (let i=0; i<6; i++){
            color += hexadecimalDigit[Math.floor(Math.random()*16)];
        }

        return color
    }

    function checkCollision() {
        let ball1Pos = ball1.position();
        let ball2Pos = ball2.position();

        let dx = ball1Pos.left + ball1.width() / 2 - (ball2Pos.left + ball2.width() / 2);
        let dy = ball1Pos.top + ball1.height() / 2 - (ball2Pos.top + ball2.height() / 2);
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (!isUpdatingNeedle && distance < ball1.width() / 2 + ball2.width() / 2) {

            isUpdatingNeedle = true;
            secondDegree = (secondDegree + secondDegreeDelta)%360;

            secondNeedle.css({
                "transform" : `rotateZ(${secondDegree}deg)`
            })

            container.css({
                "background-color" : getRandomColor()
            })

            ball1.css({
                "background-color" : getRandomColor(),
            })

            ball2.css({
                "background-color" : getRandomColor(),
            })
        } else if (isUpdatingNeedle && distance > ball1.width() / 2 + ball2.width() / 2){
            isUpdatingNeedle = false;
        }
    }

    setInterval(checkCollision, 10);
});
