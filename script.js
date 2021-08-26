'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1      
let score = 20
console.log(secretNumber);

function updateScore(guess){
    console.log(score);
    if(score === 1){
        document.querySelector('.message').textContent = "💥 You lost the game!"
        score = 0
        document.querySelector('.score').textContent = score
        document.querySelector('body').style.backgroundColor = '#FF0000'
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

    //if there is no input
    if(!guess){
        document.querySelector('.message').textContent = "⛔ No number!"
    } 
    //if guess is correct
    else if(guess === secretNumber) {
        document.querySelector('.message').textContent = "🎉 Correct Number!"
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = guess
    } 
    //if guess is incorrect
    else {
        updateScore(guess)
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20
    secretNumber = Math.trunc(Math.random()*20) + 1
    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector('.score').textContent = score
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.guess').value = ''
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = "?"
})