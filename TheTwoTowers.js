function main() {
    move();
    putBall();
    turnLeft();
    move();
    putBall();
    move();
    putBall();
    move();
    turnRight();
    move();
    move();
    turnRight();
    move();
    putBall();
    move();
    putBall();
    move();
    putBall();
    turnAround();
    move();
    move();
    move();
    turnRight();
    
	// Write your code here
}

function turnRight() {
    turnLeft();
    turnLeft();
    turnLeft();                 
}

function turnAround(){
    turnLeft();
    turnLeft();
}

main();