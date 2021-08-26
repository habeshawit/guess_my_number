'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1      
let score = 20
let highscore = 0
console.log(secretNumber);

const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

const displayScore = function(message){
    document.querySelector('.score').textContent = message
}

const displayNumber = function(style, message){
    document.querySelector('.number').textContent = message
    document.querySelector('.number').style.width = style
}

const resetStyle = function(style){
    document.querySelector('body').style.backgroundColor = style
}


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)

    //if there is no input
    if(!guess){
        displayMessage("⛔ No number!")
    } 
    //if guess is correct
    else if(guess === secretNumber) {
        displayMessage("🎉 Correct Number!")
        document.querySelector('body').style.backgroundColor = '#60b347'
        displayNumber('30rem', guess)

        if(score > highscore){
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
    } 
    //if guess is incorrect
    else {
        if(score === 1){
            displayMessage("💥 You lost the game!")
            score = 0
            displayScore(score)
            resetStyle('#FF0000')
        } else {
            displayMessage(guess > secretNumber? "📈 Too high!" : "📉 Too low!") 
            score--
            displayScore(score)
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20
    secretNumber = Math.trunc(Math.random()*20) + 1
    displayMessage("Start guessing...")
    displayScore(score)
    resetStyle('#222')
    displayNumber('15rem', '?')
    document.querySelector('.guess').value = ''

})