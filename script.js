const levelDisplay = document.querySelector('.controls h2');
const startBtn = document.querySelector('#start-btn');
const playAgain = document.querySelector('#again-btn');
const buttons = document.querySelectorAll('.simon-btn');

let simonSequence = [];
let playerSequence = [];
let level = 0;

const colors = ["green", "red", "yellow", "blue"];

function getRandomcolor() {
    return colors[Math.floor(Math.random() * 4)];
}

levelDisplay.innerHTML = 'Level: 0';
buttons.forEach(btn => btn.style.pointerEvents = 'none');

startBtn.addEventListener('click', function() {
    startBtn.innerHTML = 'Game started';
    startBtn.disabled = true;
    nextLevel()
})

playAgain.addEventListener('click', function() {
    level = 0;
    simonSequence = [];
    playerSequence = [];
    buttons.forEach(btn => btn.style.pointerEvents = 'none');
    levelDisplay.innerHTML = 'Level: 0';
    startBtn.innerHTML = 'Start Game';
    startBtn.disabled = false;
})

function nextLevel() {
    level++;
    levelDisplay.innerHTML = `Level: ${level}`;
    playerSequence = [];
    const newColor = getRandomcolor();
    simonSequence.push(newColor)
    playSequence();
}

function playSequence() {
    buttons.forEach(button => button.style.pointerEvents = 'none');
    simonSequence.forEach((color, index) => {
        setTimeout(() => {
            const btn = document.getElementById(color);
            btn.classList.add("active");
            setTimeout(() => btn.classList.remove("active"), 400);
        }, index * 800)
    })
    setTimeout(() => {
        buttons.forEach(button => button.style.pointerEvents = 'auto');
    }, simonSequence.length * 800 + 200);
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const clickedColor = button.id;
        button.classList.add("active");
        setTimeout(() => button.classList.remove("active"), 400)
        playerSequence.push(clickedColor);
        const currentIndex = playerSequence.length - 1;
        if(playerSequence[currentIndex] !== simonSequence[currentIndex]) {
            levelDisplay.innerHTML = `You lost at level ${level}!`;
            buttons.forEach(btn => btn.style.pointerEvents = 'none')
            startBtn.disabled = false;
            startBtn.innerHTML = 'Start Game'
            level = 0;
            simonSequence = [];
            playerSequence = [];
        }
        else if (playerSequence.length === simonSequence.length)
        {
            setTimeout(nextLevel, 800);
        }
    })
})