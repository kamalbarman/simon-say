let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

// storing collors is array for generate a random collors
let btns = ["red", "green", "blue", "orange"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(function () {
        btn.classList.remove("gameFlash");
    }, 300);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level is ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}
function checkAns(idx) {
    // console.log("current level : ", level);
    // let idx = level - 1;
    if (userSeq[idx] === gameSeq[idx]) {
        // console.log("same value");
        if (userSeq.length == gameSeq.length) {
            // levelUp();
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerText = `game over! press any key to start`;
        document.querySelector("body").style.background = "red";        setTimeout(function(){
        document.querySelector("body").style.background = "white";

        },150);
        reset();
    }
}

function btnPress() {
    // ye "this" wahi button hain jisko abi humne click kya hai
    // console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);

    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=[];
    gameSeq=[];
    userSeq=[];
    level=0;
}