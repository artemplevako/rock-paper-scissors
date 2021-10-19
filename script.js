let playerScore;
let computerScore;

function game () {
    playerScore = 0;
    computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);
        updateScore(roundResult);
    }
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
        if (computerSelection === 'paper') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'player';
        } else {
            return 'computer';
        }
    } else {
        if (computerSelection === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}

function computerPlay () {
    return ['Rock', 'Paper', 'Scissors'][randomInteger(3)];
}

function randomInteger (limit) {
    return Math.floor(Math.random() * limit);
}
