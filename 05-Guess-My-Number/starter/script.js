'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 2;
console.log( document.querySelector('.guess').value);
*/
function generateRandom(){
    return Math.floor(1 + (Math.random() * 20));
}
let num = generateRandom();
let score = 20;
let gameEnded = false;
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    let message = document.querySelector('.message');
    let scoreText = document.querySelector('.score');
    let body = document.querySelector('body');

    if (!guess) {
        message.textContent = '⛔ no number';
    } else {

        if (score > 1) {

            if (guess === num) {
                message.textContent = 'Correct answer!✅';
                body.style.backgroundColor = '#60b347';
                document.querySelector('.number').textContent = num.toString();
                gameEnded = true;
            }

            if(guess !== num){
                message.textContent = guess>num ? 'Less! ❌':'More! ❌';
                score--;
                scoreText.textContent = score.toString();
            }

        } else {
            message.textContent = 'You lost 🔚'
            scoreText.textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.highscore').textContent =
        gameEnded ? Math.max(score, document.querySelector('.highscore').textContent) :
        document.querySelector('.highscore').textContent;
    score = 20;
    document.querySelector('.score').textContent = score;
    num = generateRandom();
    // document.querySelector('.guess') = '';


})