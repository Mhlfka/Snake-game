playsound();
gameover();
back();
//board

var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//snakehead
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;


// snakebody

var snakeBody = []


//food
var foodX;
var foodY;


//gameover

var gameOver = false;







window.onload = function(){
    board = document.getElementById("board");
    board.height = rows*blockSize;
    board.width = cols*blockSize;
    context = board.getContext("2d"); //used for drawing on the board
    back ();
    placeFood();
    document.addEventListener("keyup", changeDirection);
    // update();
    setInterval(update, 1000/10);
}

function update() {
    if(gameOver){
        return;
    }
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "red"
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if(snakeX == foodX && snakeY == foodY){
        playsound();
        snakeBody.push([foodX, foodY]);
        
        placeFood();


    }

    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];

    }

    context.fillStyle = "lime"
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }
   

    //game over conditions
    if(snakeX < 0 || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize) {
        gameover();
        gameOver = true;
       
        alert("Game over, man");
    }

    for (let i = 0; i < snakeBody.length; i++){
        if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            gameover();
            alert("Game over,man");

        }
    }
}

function changeDirection(e) {

   
    if (e.code == "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft") {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
    }


}

function placeFood() {


    foodX  = Math.floor(Math.random() * cols) * blockSize;
    foodY  = Math.floor(Math.random() * cols) * blockSize;
}


function playsound () {
    let beat =  new Audio ('heavy_swallowwav-14682.mp3')
    beat.play()
}

function gameover () {
    let beat2 =  new Audio ('negative_beeps-6008.mp3')
    beat2.play()
}

function back () {
    let beat3 =  new Audio ('the-desert-10037.mp3')
    beat3.play()
}


// if (e.code == "ArrowUp" && velocityY != 1) {
    //     velocityX = 0;
    //     velocityY = -1;
    // }
    // else if (e.code == "ArrowDown" && velocityY != -1) {
    //     velocityX = 0;
    //     velocityY = 1;
    // }
    // else if (e.code == "ArrowLeft" && velocityY != 1) {
    //     velocityX = -1;
    //     velocityY = 0;
    // }
    // else if (e.code == "ArrowRight" && velocityY != -1) {
    //     velocityX = 1;
    //     velocityY = 0;
    // }