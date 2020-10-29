// ROCK PAPER SCISSORS

let playerWins = 0;
let computerWins = 0;
let playerName = "Player";


while(true) {
    playerName = prompt("What is your name?");
    let confirm = prompt(`\"${playerName}\", is this correct? (yes/no)`);

    if(confirm.toLowerCase() === 'yes' || confirm.toLocaleLowerCase() === 'y') {
        break;
    }
}
setPlayerName();





//Functions to call 

function setPlayerName() {
    document.getElementById("player-caption").innerHTML = `${playerName}`;
}

function playGame(playerChoice) {
    let computerChoice = getRandomChoice();
    
    defaultImages();
    animateBounce();
    //need to add a delay here to allow animation to complete
    setTimeout(function() {
        changeImages(playerChoice, computerChoice)
        computeWinner(playerChoice, computerChoice);
        showCurrentScore();
        removeBounceClass();
    }, 3000);
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

function computeWinner(playerChoice, computerChoice) {
    switch(playerChoice) {
        case 'rock':
            if(computerChoice === 'rock') {
                showResults('tie');
            } else if(computerChoice === 'paper') {
                computerWins++;
                showResults('lose');
            } else { //computerChoice === 'scissors'
                playerWins++;
                showResults('win');
            }
            break;
        case 'paper':
            if(computerChoice === 'rock') {
                playerWins++;
                showResults('win');
            } else if(computerChoice === 'paper') {
                showResults('tie');
            } else { //computerChoice === 'scissors'
                computerWins++;
                showResults('lose');
            }
            break;
        case 'scissors':
            if(computerChoice === 'rock') {
                computerWins++;
                showResults('lose');
            } else if(computerChoice === 'paper') {
                playerWins++;
                showResults('win');
            } else { //computerChoice === 'scissors'
                showResults('tie');
            }
            break;
        default:
            alert("Something went terribly wrong.");
            break;
    }
}

function showCurrentScore() {
    document.getElementById('score-container').innerHTML = `${playerWins} - ${computerWins}`;
}

function defaultImages() {
    document.getElementById('player-image').src = 'images/rock.png';
    document.getElementById('cpu-image').src = 'images/rock.png';
    document.getElementById('results').innerHTML = "";
}

function changeImages(playerChoice, computerChoice) {
    //change player image
    switch(playerChoice) {
        case 'rock':
            document.getElementById('player-image').src = 'images/rock.png';
            break;
        case 'paper':
            document.getElementById('player-image').src = 'images/paper.png';
            break;
        case 'scissors':
            document.getElementById('player-image').src = 'images/scissors.png';
            break;
    }

    //change CPU image
    switch(computerChoice) {
        case 'rock':
            document.getElementById('cpu-image').src = 'images/rock.png';
            break;
        case 'paper':
            document.getElementById('cpu-image').src = 'images/paper.png';
            break;
        case 'scissors':
            document.getElementById('cpu-image').src = 'images/scissors.png';
            break;
    }
}

function showResults(result) {
    if(result == 'win') {
        document.getElementById('results').innerHTML = "YOU WIN!";
    } else if(result == 'lose') {
        document.getElementById('results').innerHTML = "YOU LOSE!";
    } else {
        document.getElementById('results').innerHTML = "IT'S A TIE!"
    }
}

function animateBounce() {
    document.getElementById('player-image').classList.add('bounce');
    document.getElementById('cpu-image').classList.add('bounce');
}

function removeBounceClass() {
    document.getElementById('player-image').classList.remove('bounce');
    document.getElementById('cpu-image').classList.remove('bounce');
}