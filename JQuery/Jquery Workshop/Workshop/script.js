$(document).ready(function () {
    const ball1 = $('#ball1');
    const ball2 = $('#ball2');
    const container = $('.container');
    let isBallGenerated = false;
    let xPos = 225;
    let yPos = 225;
    let moveBall;

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

        if (distance < ball1.width() / 2 + ball2.width() / 2) {
            if (!isBallGenerated) {
                // Generate new ball
                const newBall = $('<div class="ball" id="newBall"></div>');
                container.append(newBall);
                newBall.css({
                    "background-color" : getRandomColor(), 
                    "top" : '225px',
                    "left" : '225px'
                });

                // Change background color
                container.css("background-color", getRandomColor());
                isBallGenerated = true;

                moveBall = setInterval(()=>{
                    xPos += 5
                    yPos -= 5
                    newBall.css({
                    "left" : xPos+"px",
                    "top" : yPos+"px"
                    })

                    if (yPos<-50 && xPos>500){
                        clearInterval(moveBall);
                        $(newBall).remove();
                        isBallGenerated = false;
                        xPos = 225;
                        yPos = 225;
                    }
                }, 50)
            }
        }
    }

    setInterval(checkCollision, 50);
});
