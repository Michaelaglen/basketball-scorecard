
//HOME
let currentHomeScore = 0;
const homeScore = document.getElementById("home-score");

function homePlusOne() {
    currentHomeScore += 1;
    homeScore.textContent = currentHomeScore;
}

function homePlusTwo() {
    currentHomeScore += 2;
    homeScore.textContent = currentHomeScore;
}

function homePlusThree() {
    currentHomeScore += 3;
    homeScore.textContent = currentHomeScore;
}

//AWAY
let currentAwayScore = 0;
const awayScore = document.getElementById("away-score");


function plusOne() {
    currentAwayScore += 1;
    awayScore.textContent = currentAwayScore;
}

function plusTwo() {
    currentAwayScore += 2;
    awayScore.textContent = currentAwayScore;
}

function plusThree() {
    currentAwayScore += 3;
    awayScore.textContent = currentAwayScore;
}
//RESET
function resetBtn() {
    currentHomeScore = 0;
    currentAwayScore = 0;
    homeScore.textContent = currentHomeScore;
    awayScore.textContent = currentAwayScore;
}