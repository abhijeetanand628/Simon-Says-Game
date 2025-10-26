const lvl = document.querySelector('#level-display');
const startBtn = document.querySelector('#start-btn');
const playAgain = document.querySelector('#again-btn')
const buttons = document.querySelectorAll('.simon-btn');

let simonSequence = [];
let playerSequence = [];
let level = 0;

const colors = ["green", "red", "yellow", "blue"];

const randomColor = colors[Math.floor(Math.random() * 4)];

lvl.innerHTML = '0';

startBtn.addEventListener('click', function() {
    console.log("Game started");
    lvl.innerHTML = '1';
    startBtn.innerHTML = 'Game started';
    startBtn.disabled = true;
})

playAgain.addEventListener('click', function() {
    console.log("Game started again!");
    lvl.innerHTML = '0';
    startBtn.innerHTML = 'Start Game';
    startBtn.disabled = false;
})

buttons.forEach(buttons => {

})