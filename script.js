'use strict';

const secretNumber = Math.trunc(Math.random()*20) + 1      
let score = 20
console.log(secretNumber);

function updateScore(guess){
    console.log(score);
    if(score === 1){
        document.querySelector('.message').textContent = "💥 You lost the game!"
        score = 0
        document.querySelector('.score').textContent = score
        return
    }
    if(guess > secretNumber){
        document.querySelector('.message').textContent = "📈 Too high!"
    } else {
        document.querySelector('.message').textContent = "📉 Too low!"
    }
    score--
    document.querySelector('.score').textContent = score
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)

    if(!guess){
        document.querySelector('.message').textContent = "⛔ No number!"
    } else if(guess === secretNumber) {
        document.querySelector('.message').textContent = "🎉 Correct Number!"
    } else {
        updateScore(guess)
    }
})