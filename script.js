let playerScore;
let computerScore;

function game () {
    playerScore = 0;
    computerScore = 0;

    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);
    updateScore(roundResult);
}

function updateScore (roundResult) {
    if (roundResult === 'player') {
        playerScore++;
    } else if (roundResult === 'computer') {
        computerScore++;
    }
}

function playerPlay () {
    let selection;
    do {
        selection = prompt('What is your selection?') ?? '';
    } while (!isValidSelection(selection));
    return selection;
}

function isValidSelection(selection) {
    return ['rock', 'paper', 'scissors'].includes(selection.toLowerCase());
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return 'tie';
    }
    if (playerSelection === 'rock') {
        return computerSelection === 'paper' ? 'computer' : 'player';
    } else if (playerSelection === 'paper') {
        return computerSelection === 'rock' ? 'player' : 'computer';
    } else {
        return computerSelection === 'rock' ? 'computer' : 'player';
    }
}

function computerPlay () {
    return ['Rock', 'Paper', 'Scissors'][randomInteger(3)];
}

function randomInteger (limit) {
    return Math.floor(Math.random() * limit);
}
