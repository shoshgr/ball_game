
let timerId;
const ballImage = new Image();
let count=0;
let x;
let y;

function startTimer() {

    ballImage.src = "../images/ball.png";

    ballImage.onload = function () {
        drawBall();
    };
    timerId = setInterval(function () {
        drawBall();
        console.log(balls);
        if (balls.length-1 == 0) {
            clearInterval(timerId);
            alert("המשחק נגמר!");
        }
    }, 2000);
}

function drawBall() {
 
    while (true) {
        x = Math.ceil((Math.random() * 9)) + 1;
        y = Math.ceil((Math.random() * 9)) + 1;
        if (!(x == player.x && y == player.y)) {
            balls.map(b => {
                if (b.x == x && b.y == y) {
                    return;
                }
            })
            ctx.drawImage(ballImage, x * tileSize, y * tileSize, tileSize, tileSize);
           
           
            break;

        }
    }
    balls.push({ "x": x, "y": y });
}

startTimer();



