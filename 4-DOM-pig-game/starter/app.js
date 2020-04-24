/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var globalScore, roundScore, activePlayer, dice, scoreLimit, scoreResetValue,gamePlaying;

gamePlaying = true;



var diceImage = document.querySelector('.dice');
var rollDiceButton = document.querySelector('.btn-roll');
var holdButton = document.querySelector('.btn-hold');
var globalScoreDisplayPlayer1 = document.getElementById('score-0');
var globalScoreDisplayPlayer2 = document.getElementById('score-1');
var roundScoreDisplayPlayer1 = document.getElementById('current-0');
var roundScoreDisplayPlayer2 = document.getElementById('current-1');
var player1ActivePanel = document.querySelector('.player-0-panel');
var player2ActivePanel = document.querySelector('.player-1-panel');
var newGameButton = document.querySelector('.btn-new');

init();




//random number generator
function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}


//set event handler, callback function

function btn(){
    if (globalScore[activePlayer] < scoreLimit){
    
    if(gamePlaying){

    

    //Do something here
    console.log('Test');

    //1. Random number
    Dice = rollDice();

    //2. Display the result
    diceImage.style.display = 'block';
    diceImage.src = 'dice-' + Dice + '.png' //src to change image

    //3. Update the round score if the rolled number is not 1
    if(Dice !== coreResetValue){
        //Add score
        roundScore += Dice;
        
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;
        } else {
        //Next player
        console.log(globalScore);
        globalScore[activePlayer] += roundScore;
    document.getElementById('score-'+ activePlayer).textContent = globalScore[activePlayer];

                switchPlayer();    


    } 
}   } else {
    gamePlaying = false;
    win();
}}

function switchPlayer(){
    
    activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
    roundScore = 0;

    roundScoreDisplayPlayer1.textContent = '0';
    roundScoreDisplayPlayer2.textContent = '0';
    
    player1ActivePanel.classList.toggle('active');
    player2ActivePanel.classList.toggle('active');
    diceImage.style.display = 'none';

    //document.querySelector('.player-0-panel').classList.remove('active')
    //document.querySelector('.player-1-panel').classList.add('active')
    
}
function hld(){
    if (gamePlaying){
    //add current score to global score
    globalScore[activePlayer] += roundScore;

    // update the UI
    document.getElementById('score-'+ activePlayer).textContent = globalScore[activePlayer];
    

    //Check if player won the game
    if(globalScore[activePlayer] >= scoreLimit){
        win();
    } else {
        //Next player
    switchPlayer();
    }}
    

}



rollDiceButton.addEventListener('click',btn); // call back function
holdButton.addEventListener('click',hld);
newGameButton.addEventListener('click',init);

function win(){
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    diceImage.style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
}

function init(){
    globalScore = [0,0];
    roundScore = 0;
    activePlayer = 0;
    
    coreResetValue = 1;
    scoreLimit = 100;
    gamePlaying = true;

    //reset values
diceImage.style.display = 'none';
globalScoreDisplayPlayer1.textContent = '0';
globalScoreDisplayPlayer2.textContent = '0';
roundScoreDisplayPlayer1.textContent = '0';
roundScoreDisplayPlayer2.textContent = '0';

document.querySelector('#name-0').textContent = 'Player 1';
document.querySelector('#name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.add('active');
}

var x = document.querySelector('#score-0').textContent;
//Dom minupulation
//globalScore[activePlayer] = globalScore[activePlayer] + roundScore;
 
// user innerHtml to insert HTML
//document.querySelector('#current-'+ activePayer).innerHTML = '<em>' + dice + '</em>'
