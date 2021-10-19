let playerScore;
let computerScore;
const GOAL_SCORE = 5;

setup();

function setup () {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => shape.addEventListener(
        'click', e => playRound(e.target.textContent.toLowerCase())
    ));

    restart();
}

function restart () {
    playerScore = 0;
    computerScore = 0;

    updateScoreNodes();
}

function updateScoreNodes () {
    const playerScoreNode = document.querySelector('.player-score');
    const computerScoreNode = document.querySelector('.computer-score');
    playerScoreNode.textContent = playerScore;
    computerScoreNode.textContent = computerScore;
}

function updateScore (roundResult) {
    if (roundResult === 'player') {
        playerScore++;
    } else if (roundResult === 'computer') {
        computerScore++;
    }

    updateScoreNodes();
}

function playRound (playerSelection) {
    const computerSelection = computerPlay().toLowerCase();

    let roundResult;
    if (playerSelection === computerSelection) {
        roundResult = 'tie';
    } else if (playerSelection === 'rock') {
        roundResult = computerSelection === 'paper' ? 'computer' : 'player';
    } else if (playerSelection === 'paper') {
        roundResult = computerSelection === 'rock' ? 'player' : 'computer';
    } else {
        roundResult = computerSelection === 'rock' ? 'computer' : 'player';
    }
    updateScore(roundResult);
    if (playerScore === GOAL_SCORE) {
        alert('You win!');
        restart();
    } else if (computerScore === GOAL_SCORE) {
        alert('You lose!');
        restart();
    }
}

function computerPlay () {
    return ['Rock', 'Paper', 'Scissors'][random(3)];
}

function random (limit) {
    return Math.floor(Math.random() * limit);
}
