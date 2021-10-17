let playerScore;
let computerScore;

function game () {
    console.log('The game starts');
    playerScore = 0;
    computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`--------------- Round ${round} ---------------`);
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        console.log('Your selection - ' + playerSelection);
        console.log('Computer selection - ' + computerSelection);
        const roundResult = playRound(playerSelection, computerSelection);
        updateScore(roundResult);
        printScore();
    }

    printWinner();
}

function printWinner () {
    const winner = playerScore === computerScore ? 'tie' :
        playerScore > computerScore ? 'player' :
        'computer';
    console.log(`Winner: ${winner}`);
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

function printScore () {
    console.log('---------------- Score ----------------');
    console.log('     Player        |      Computer');
    console.log(`        ${playerScore}          |          ${computerScore}`)
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log('It\'s a Tie!');
        return 'tie';
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            console.log('You Lose! Paper beats Rock');
            return 'computer';
        } else {
            console.log('You Win! Rock beats Scissors');
            return 'player';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log('You Win! Paper beats Rock');
            return 'player';
        } else {
            console.log('You Lose! Scissors beat Paper');
            return 'computer';
        }
    } else {
        if (computerSelection === 'rock') {
            console.log('You Lose! Rock beats Scissors');
            return 'computer';
        } else {
            console.log('You Win! Scissors beat Paper');
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
