let body = document.querySelector("body");
let level = 0;
let started = false;
let highest = 0;
let gameSeq = [];
let userSeq = [];
let rand = ["one","two","three","four"];
let h3 = document.querySelector("h3");
body.addEventListener("keypress",start);
function start() {
    if(started == false){
        levelUp();
        started = true;
    }
  
}


function flash(){
    let ranIdx = Math.floor(Math.random() * 4);
    let randColor = rand[ranIdx];
    let randbtn = document.querySelector(`.${randColor}`);
   gameSeq.push(randColor);
    flashBtn(randbtn);
}
function levelUp(){
    userSeq = [];
    highest++;
    level++;
    h3.innerText = `Level ${level}`;
    flash();
}
function flashBtn(btn){
    btn.classList.add("flashh");
    setTimeout(()=>{
        btn.classList.remove("flashh");
    },200);
}

let btns = document.querySelectorAll(".btn");
for( btn of btns) {
    btn.addEventListener("click",flashUser);
}
function flashUser() {
this.classList.add("green");
let userColor = this.getAttribute("id");
userSeq.push(userColor);
setTimeout(()=>{
    this.classList.remove("green");
},200);
GameAns(userSeq.length-1);
}

function GameAns(idx){
if( gameSeq[idx]===userSeq[idx] ) {
    if(gameSeq.length == userSeq.length){
    setTimeout(levelUp,1000);
    }
} else {
    h3.innerHTML = `Game over! <strong>Your score was : ${level} </strong> <br>try again by pressing any key`;
    reset();
    body.style.backgroundColor = "red";
    setTimeout( function(){
        body.style.backgroundColor = "white"; 
    },250)
}
}
function reset(){
    level = 0;
    gameSeq = [];
    userSeq = [];
    started = false;
}




