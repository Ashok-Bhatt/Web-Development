
$(document).ready(function () {
    const ball1 = $('#ball1');
    const ball2 = $('#ball2');
    const container = $('.container');
    let isBallGenerated = false;
    let xPos = [225,255,255,255];
    let yPos = [225,255,255,255];
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
                const newBalls = [$('<div class="ball" id="newBall1"></div>'),
                $('<div class="ball" id="newBall2"></div>'),
                $('<div class="ball" id="newBall3"></div>'),
                $('<div class="ball" id="newBall4"></div>'),];

                for (let ball of newBalls){
                    container.append(ball);
                    ball.css({
                        "background-color" : getRandomColor(), 
                        "top" : '225px',
                        "left" : '225px'
                    })
                }

                // Change background color
                container.css("background-color", getRandomColor());
                isBallGenerated = true;

                moveBall = setInterval(()=>{
                    xPos[0], xPos[1], xPos[2], xPos[3] = xPos[0]-5, xPos[1]+5, xPos[2]+5, xPos[3]-5;
                    yPos[0], yPos[1], yPos[2], yPos[3] = yPos[0]+5, yPos[1]+5, yPos[2]-5, yPos[3]-5;
                    
                    for (let ball in newBalls){
                        newBalls[ball].css({
                            "left" : xPos[ball]+"px",
                            "top" : yPos[ball]+"px"
                        })
                    }

                    if (yPos[0]<-50){
                        clearInterval(moveBall);
                        for (let ball of newBalls){
                            $(ball).remove();
                        }
                        isBallGenerated = false;
                        let xPos = [225,255,255,255];
                        let yPos = [225,255,255,255];
                    }
                }, 50)
            }
        }
    }

    setInterval(checkCollision, 50);
});