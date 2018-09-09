

//when window loads, start the game right away
let numLength, numMemo, lives, compareNum, currentNum, highScore = 19;
let totalSeconds, minutes, seconds; //variables for timer
let memo = document.getElementById("memorize"); //this is the current set of digits to memorize
let infoA = document.getElementById("infoA"); //this is for the current number of digits to memorize
let infoB = document.getElementById("infoB"); //this is for the number of lives left
let infoC = document.getElementById("infoC"); //this is for the high score
let timer = document.getElementById("timer");

window.onload = function(){
    startGame2();
    setTimeout("timeStart()",1000); //starts the timer
};

function startGame1(){
    numLength = 2; //number of digits to memorize
    numMemo = ""; //actual digits to memorize
    lives = 3; //lives
    compareNum = 0; //sequence of numbers to compare

    infoA.innerHTML = numLength-1;
    infoB.innerHTML = lives;
    infoC.innerHTML = highScore;

    //randomizing a new set of numbers
    for (let i=0; i<numLength; i++){
        numMemo += Math.floor(Math.random()*10)
    }

    //initialize the number to press
    memo.innerHTML = numMemo;

    //initialize variables for the timer that counts down
    totalSeconds = 300; //start time 5 mins (300 seconds)
    minutes = parseInt(totalSeconds/60);
    seconds = parseInt(totalSeconds%60);
    seconds = ("00" + seconds).substr(-2);
    timer.innerHTML = minutes + ":" + seconds;
}

//this will reshow the numbers to press
memo.onclick = function () {
    memo.innerHTML = numMemo;
    compareNum = 0; //by resetting this counter, the player will have to enter the order of numbers from the start
};

//checks if the right number is pressed. If not lose a life. If yes, continue
function checkGood(){
    memo.innerHTML = "[show again]"; //hides numbers
    if(numMemo[compareNum] !== currentNum){
        checkLose();
    } else {
        checkWin();
    }
}

//checks if there are any lives left. If none, game will restart
function checkLose(){
    lives--;
    infoB.innerHTML = lives;
    memo.innerHTML = numMemo;
    if (lives === 0){
        if (numLength === 2){
            alert("You haven't gotten past the first 2 digits?\n\nGAME OVER!")
        } else {
            alert("GAME OVER!\n\nYou memorized up to " + (numLength-1) + " digits long! Nice job!");
        }
        if (gameMode = 1){
            checkHighScore1();
            startGame1();
        } else if (gameMode = 2){
            startGame2();
        }
    } else {
        alert("WOOPS! You pressed the wrong number in the sequence! You lose a life, but keep trying!");
        memo.setAttribute("style","color: white");
        compareNum = 0; //re-initializes the number sequence to enter by the user
    }
}

function checkWin() {
    compareNum++;
    if(compareNum === numLength){
        numLength++;
        infoA.innerHTML = numLength-1;

        alert("Great job! Now try memorizing " +  numLength + " digits!");

        //randomizing a new set of numbers
        numMemo = "";
        for (let i=0; i<numLength; i++){
            numMemo += Math.floor(Math.random()*10)
        }
        //initialize the number to press
        memo.innerHTML = numMemo;
        memo.setAttribute("style","color: white");

        compareNum = 0;
    }
}

function checkHighScore1(){
    if(numLength-1 > highScore){
        alert("New high score!");
        highScore = numLength-1;
        infoC.innerHTML = highScore;
    }
}


//setting up the timer
function timeLeft(){
    timer.innerHTML = minutes + ":" + seconds;
    if(totalSeconds <= 0){
        alert("TIME'S UP!\n\nYou memorized up to " + (numLength-1) + " digits long! Nice job!\n\nLet's try that again!");
        checkHighScore1();
        startGame1();
        setTimeout("timeLeft()",1000); //starts the timer
    } else {
        totalSeconds --;
        minutes = parseInt(totalSeconds/60);
        seconds = parseInt(totalSeconds%60);
        seconds = ("00" + seconds).substr(-2);
        setTimeout("timeLeft()",1000);
    }
}

function timeStart(){
    timer.innerHTML = minutes + ":" + seconds;
    totalSeconds ++;
    minutes = parseInt(totalSeconds/60);
    seconds = parseInt(totalSeconds%60);
    minutes = ("00" + minutes).substr(-2);
    seconds = ("00" + seconds).substr(-2);
    setTimeout("timeStart()",1000);
}

//Starting the game for No Timer mode
function startGame2(){
    numLength = 2; //number of digits to memorize
    numMemo = ""; //actual digits to memorize
    lives = 3; //lives
    compareNum = 0; //sequence of numbers to compare

    infoA.innerHTML = numLength-1;
    infoB.innerHTML = lives;
    infoC.innerHTML = highScore;

    //randomizing a new set of numbers
    for (let i=0; i<numLength; i++){
        numMemo += Math.floor(Math.random()*10)
    }

    //initialize the number to press
    memo.innerHTML = numMemo;

    //initialize variables for the timer that counts up
    totalSeconds = 0;
    minutes = parseInt(totalSeconds/60);
    seconds = parseInt(totalSeconds%60);
    minutes = ("00" + minutes).substr(-2);
    seconds = ("00" + seconds).substr(-2);
    timer.innerHTML = minutes + ":" + seconds;
}

function number1() {
    currentNum = "1";
    checkGood();
}
function number2() {
    currentNum = "2";
    checkGood();
}
function number3() {
    currentNum = "3";
    checkGood();
}
function number4() {
    currentNum = "4";
    checkGood();
}
function number5() {
    currentNum = "5";
    checkGood();
}
function number6() {
    currentNum = "6";
    checkGood();
}
function number7() {
    currentNum = "7";
    checkGood();
}
function number8() {
    currentNum = "8";
    checkGood();
}
function number9() {
    currentNum = "9";
    checkGood();
}
function number0() {
    currentNum = "0";
    checkGood();
}