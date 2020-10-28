// ROCK PAPER SCISSORS

let numberOfGames = prompt("How many games would you like to play to?");
let playerWins = 0;
let computerWins = 0;

/*
    Get number of games

    while games<numberOfWins for both user and computer {
      *  randomly get computer (make this a function)
        ask for user input (make sure it's a good input?)
        compute winner (make this a function)
        add up the score (global variables)
    }

*/
while(playerWins < numberOfGames && computerWins < numberOfGames) {
    let computerChoice = getRandomChoice();
    let playerChoice;
    
    //Ensures the user always has a valid choice
    while(playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
        playerChoice = prompt("Do you pick \"rock\", \"paper\", or \"scissors\"?").toLowerCase();
    }

    computeWinner(playerChoice, computerChoice);
    showCurrentScore();

}

alert(`Thank you for playing! ${(playerWins > computerWins) ? "YOU WON" : "You lost. Better luck next time!"}`);

function showCurrentScore() {
    alert(`Player wins: ${playerWins} | Computer Wins: ${computerWins}`);
}

function computeWinner(playerChoice, computerChoice) {
    switch(playerChoice) {
        case 'rock':
            if(computerChoice === 'rock') {
                alert(`Computer also picks ${computerChoice}, it's a tie!`);
            } else if(computerChoice === 'paper') {
                computerWins++;
                alert(`Computer picks ${computerChoice}, you lose!`);
            } else { //computerChoice === 'scissors'
                playerWins++;
                alert(`Computer picks ${computerChoice}, you win!`);
            }
            break;
        case 'paper':
            if(computerChoice === 'rock') {
                playerWins++;
                alert(`Computer picks ${computerChoice}, you win!`);
            } else if(computerChoice === 'paper') {
                alert(`Computer also picks ${computerChoice}, it's a tie!`);
            } else { //computerChoice === 'scissors'
                computerWins++;
                alert(`Computer picks ${computerChoice}, you lose!`);
            }
            break;
        case 'scissors':
            if(computerChoice === 'rock') {
                computerWins++;
                alert(`Computer picks ${computerChoice}, you lose!`);
            } else if(computerChoice === 'paper') {
                playerWins++;
                alert(`Computer picks ${computerChoice}, you win!`);
            } else { //computerChoice === 'scissors'
            alert(`Computer also picks ${computerChoice}, it's a tie!`);
            }
            break;
        default:
            alert("Something went terribly wrong.");
            break;
    }
}

function getRandomChoice() {
    let chance = Math.random()
    let computerChoice = 'rock'
    if(chance <= 0.33333) {
        computerChoice = 'paper'
    } else if(chance <= 0.66666) {
        computerChoice = 'scissors'
    }
    return computerChoice
}