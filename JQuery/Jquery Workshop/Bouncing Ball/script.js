
$(document).ready(function(){
    const ball1 = $('#ball1');
    const ball2 = $('#ball2');
    const container = $('.container');
    let isWaveGenerated = false;
    let waveElement;
    let waveRange = 0;
    let generateWave;

    function checkCollision() {
        var ball1Pos = ball1.position();
        var ball2Pos = ball2.position();

        var dx = ball1Pos.left + ball1.width() / 2 - (ball2Pos.left + ball2.width() / 2);
        var dy = ball1Pos.top + ball1.height() / 2 - (ball2Pos.top + ball2.height() / 2);
        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < ball1.width() / 2 + ball2.width() / 2) {
            if (!isWaveGenerated){
                waveElement = $('<div id="shock-wave"></div>');
                container.append(waveElement);
                isWaveGenerated = true;
                generateWave = setInterval(()=>{
                    waveRange = waveRange + 0.1;
                    waveElement.css({
                        "transform" : `scale(${waveRange})`,
                    })
                    if (waveRange>50){
                        waveRange = 0;
                        clearInterval(generateWave);
                        $(waveElement).remove();
                        isWaveGenerated = false;
                    }
                }, 5)
            }
        }
    }

    setInterval(checkCollision, 50);
});