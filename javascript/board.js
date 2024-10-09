let balls = [];
let score = 0;
const canvas = document.getElementById('gameBoard');
const ctx = canvas.getContext('2d');

const gridSize = 12;
const tileSize = canvas.width / gridSize;
ctx.strokeStyle = 'black';
let player = {
    x: 1,
    y: 1,
    size: tileSize
};
const playerImage = new Image();
playerImage.src = "../images/player.png";

playerImage.onload = function () {
    drawPlayer();
};


function drawPlayer() {
    console.log("score: " + score);
    balls = balls.filter((b) => {
        if (b.x === player.x && b.y === player.y) {
            score++;
            document.getElementById("score").innerHTML = "ניקוד: " + score;
            return false;
        }
        return true;
    });

    ctx.drawImage(playerImage, player.x * tileSize, player.y * tileSize, player.size, player.size);
}


function drawBoard() {
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            ctx.strokeRect(col * tileSize, row * tileSize, tileSize, tileSize);
            ctx.fillStyle = ((((row == 0 || row == gridSize - 1) && (col != 5)) || ((col == 0 || col == gridSize - 1)) && (row != 5))) ? 'blueviolet' : '#838383';
            ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);

        }
    }
}




function movePlayer(direction) {
    ctx.fillStyle = '#838383';


    ctx.strokeRect(player.x * tileSize, player.y * tileSize, tileSize, tileSize);
    ctx.fillRect(player.x * tileSize, player.y * tileSize, tileSize, tileSize);
    switch (direction) {
        case 'left':
            if (player.x > 1) {
                player.x--;
            } else if (player.y == 5) {
                player.x = 10;
            }
            break;
        case 'right':
            if (player.x < gridSize - 2) {
                player.x++;
            } else if (player.y == 5) {
                player.x = 1;
            }
            break;
        case 'up':
            if (player.y > 1) {
                player.y--;
            } else if (player.x == 5) {
                player.y = 10;
            }
            break;
        case 'down':
            if (player.y < gridSize - 2) {
                player.y++;
            } else if (player.x == 5) {
                player.y = 1;
            }
            break;

    }
 

    drawPlayer();
}



window.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') movePlayer('left');
    if (event.key === 'ArrowRight') movePlayer('right');
    if (event.key === 'ArrowUp') movePlayer('up');
    if (event.key === 'ArrowDown') movePlayer('down');
});



drawBoard();
drawPlayer();
