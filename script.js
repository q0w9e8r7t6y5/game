// Add all elements on page that are being worked with
let playBtn = document.querySelector('#playBtn');
let results = document.querySelector('#results');
let compPick = document.querySelector('#compPick')
let winMessage = document.querySelector('#winMessage');
let loseMessage = document.querySelector('#loseMessage');
let tieMessage = document.querySelector('#tieMessage');

playBtn.addEventListener('click', playturn);

function playturn(){

    // which option did player pick
    let playerChoice = document.querySelector('input[name="choice"]:checked').value;

    // computer needs to pick one of their own to compete
    let options = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    let pick = options[random];

    // possible for tie
    let tie = playerChoice == pick;

    tieMessage.innerHTML = pick;

}