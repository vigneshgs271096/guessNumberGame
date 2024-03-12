'use strict';

// Elements
const randomNumberElement = document.querySelector(".number");
const guessInputElement = document.querySelector(".guess");
const guessSubmitBtn = document.querySelector(".check");
const restartGameBtn = document.querySelector(".again");
const messageElement = document.querySelector(".message");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".highscore");

// variables
let randomNumber;
let score = 20;
let highScore = 0;
let isPlaying = true;

createRandomNumber();
guessSubmitBtn.addEventListener('click',function() {
	let inputNum = Number(guessInputElement.value);
	if(inputNum && inputNum <= 20 && inputNum >=1) {
		if(inputNum === randomNumber) {
			if(highScore < score && score > 0) {
				highScore = score;
				score = 0;
			}
			document.body.style.backgroundColor = "#60b347";
			messageElement.textContent = "Succesfully found the number";
			randomNumberElement.textContent = inputNum;
			randomNumberElement.classList.add("numberSuccess");
			isPlaying = false;
		} else {
			score--;
		}
		updateUI()
	} else {
		messageElement.textContent = "Please enter a number between 0 to 20";
	}
	guessInputElement.value = "";
})

function createRandomNumber() {
	randomNumber = Math.trunc((Math.random() * 20) + 1);
	return randomNumber;
}

function updateUI() {
	scoreElement.textContent = score;
	highScoreElement.textContent = highScore;
}

function restart() {
	score = 20;
	highScore = 0;
	updateUI();
	document.body.style.backgroundColor = "#222";
	messageElement.textContent = "Start guessing...";
	randomNumberElement.textContent = "?";
}

restartGameBtn.addEventListener('click',restart);