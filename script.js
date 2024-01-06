'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number !';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 200;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //no imput
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';

        //When player wins
    } else if (guess === secretNumber) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secretNumber;

        //highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > -1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too Low';
            document.querySelector('.score').textContent = score;
            score--;
        } else {
            document.querySelector('.message').textContent = 'You Lost The Game!';
            document.querySelector('.score').textContent = '0';
        }
    }
});

//coding challenge 1 

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});


/*
else if (guess > secretNumber) {
    if (score > -1) {
        document.querySelector('.message').textContent = 'Too High!';
        document.querySelector('.score').textContent = score;
        score--;
    } else {
        document.querySelector('.message').textContent = 'You Lost The Game!';
    }
    //When guess is too low
} else if (guess < secretNumber)
    if (score > -1) {
        document.querySelector('.message').textContent = 'Too Low!';
        document.querySelector('.score').textContent = score;
        score--;
    } else {
        document.querySelector('.message').textContent = 'You Lost The Game!';
    }
    */