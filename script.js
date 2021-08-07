// Pick a random move
function computerPlay() {
    let move;
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        move = "Rock";
    } else if (number === 1) {
        move = "Paper";
    } else if (number === 2) {
        move = "Scissors";
    }
    return move;
}

function oneRound(playerSelection, computerSelection) {
    let output;

    // Win or lose logic
    if (playerSelection === "rock" && computerSelection === "Scissors") {
        output = "You Win! Rock beats Scissors!";
    } 
    else if (playerSelection === "paper" && computerSelection === "Rock") {
        output = "You Win! Paper beats Rock!";
    } 
    else if (playerSelection === "scissors" && computerSelection === "Paper") {
        output = "You Win! Scissors beats Paper!";
    } 
    else if (playerSelection === "rock" && computerSelection === "Paper") {
        output = "You Lose! Paper beats Rock!";
    } 
    else if (playerSelection === "paper" && computerSelection === "Scissors") {
        output = "You Lose! Scissors beats Paper!";
    } 
    else if (playerSelection === "scissors" && computerSelection === "Rock") {
        output = "You Lose! Rock beats Scissors!";
    }
    return output;
}

function game() {
    while (true) {
        let move = prompt("What's your move? Rock/Paper/Scissors")
        console.log(oneRound(move.toLowerCase(), computerPlay()));
    }
}

game()