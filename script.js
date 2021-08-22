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
    container = document.querySelector('#results');
    paras = container.querySelectorAll('p');
    paras.forEach((para) => {
        container.removeChild(para);
    });
    para = document.createElement('p');
    if (playerSelection === "rock" && computerSelection === "Scissors") {
        para.textContent = "You Win! Rock beats Scissors!";
        para.setAttribute('id', 'results-text');
        container.appendChild(para);
        return 1;
    } 
    else if (playerSelection === "paper" && computerSelection === "Rock") {
        para.textContent = "You Win! Paper beats Rock!";
        para.setAttribute('id', 'results-text');
        container.appendChild(para);
        return 1;
    } 
    else if (playerSelection === "scissors" && computerSelection === "Paper") {
        para.textContent = "You Win! Scissors beats Paper!";
        para.setAttribute('id', 'results-text');
        container.appendChild(para);
        return 1;
    } 
    else if (playerSelection === "rock" && computerSelection === "Paper") {
        para.textContent = "You Lose! Paper beats Rock!";
        para.setAttribute('id', 'results-text');
        container.appendChild(para);
        return 0;
    } 
    else if (playerSelection === "paper" && computerSelection === "Scissors") {
        para.textContent = "You Lose! Scissors beats Paper!";
        para.setAttribute('id', 'results-text');
        container.appendChild(para);
        return 0;
    } 
    else if (playerSelection === "scissors" && computerSelection === "Rock") {
        para.textContent = "You Lose! Rocks beats Scissors!";
        para.setAttribute('id', 'results-text');
        container.appendChild(para);
        return 0;
    }
    else {
        para.textContent = "Tie!";
        para.setAttribute('id', 'results-text');
        container.appendChild(para);
        return 2;
    }
}

function game() {
    let player_score = 0;
    let computer_score = 0;

    const player_points = document.querySelector('#player-score');
    const computer_points = document.querySelector('#computer-score');
    btns = document.querySelectorAll('.btn');
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            round = oneRound(btn.id, computerPlay());
            if(round === 1) {
                player_score++;
            } else if(round === 0) {
                computer_score++;
            }
            player_points.textContent = player_score;
            computer_points.textContent = computer_score;
        });
    });
}

game()