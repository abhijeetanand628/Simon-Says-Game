const lvl = document.querySelector('#level-display');
const startBtn = document.querySelector('#start-btn');
const playAgain = document.querySelector('#again-btn')
const buttons = document.querySelectorAll('.simon-btn');

let simonSequence = [];
let playerSequence = [];
let level = 0;

const colors = ["green", "red", "yellow", "blue"];

function getRandomcolor() {
    return colors[Math.floor(Math.random() * 4)];
}

lvl.innerHTML = '0';

startBtn.addEventListener('click', function() {
    startBtn.innerHTML = 'Game started';
    startBtn.disabled = true;
    nextLevel()
})

playAgain.addEventListener('click', function() {
    level = 0;
    lvl.innerHTML = level;
    startBtn.innerHTML = 'Start Game';
    startBtn.disabled = false;
    simonSequence = [];
    playerSequence = [];
})

function nextLevel() {
    level++;
    lvl.innerHTML = level;
    playerSequence = [];
    const newColor = getRandomcolor();
    simonSequence.push(newColor)
    playSequence();
}

function playSequence() {
    simonSequence.forEach((color, index) => {
        setTimeout(() => {
            const btn = document.getElementById(color);
            btn.classList.add("active");
            setTimeout(() => btn.classList.remove("active"), 400);
        }, index * 800)
    })
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const clickedColor = button.id;
        button.classList.add("active");
        setTimeout(() => button.classList.remove("active"), 400)
        playerSequence.push(clickedColor);
        const currentIndex = playerSequence.length - 1;
        if(playerSequence[currentIndex] !== simonSequence[currentIndex]) {
            lvl.innerHTML = `You lost at level ${level}`;
            startBtn.disabled = false;
            startBtn.innerHTML = 'Start Game'
        }
        else if (playerSequence.length === simonSequence.length)
        {
            setTimeout(nextLevel, 800);
        }
    })
})