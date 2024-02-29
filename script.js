let scorePlayer = 0;
let scoreComputer = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id);
  });
});

const results = document.querySelector('div');
results.style.fontSize = '32px';
const choices = document.querySelector('p');
const final = document.querySelector('h3');

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    final.style.color = 'black';
    final.textContent = "Results";
    choices.style.color = 'gray';
    choices.textContent = "Your choice: " + playerSelection + ". " + "Computer choice: " + computerSelection;
    
    if (playerSelection === 'rock') {
        switch(computerSelection) {
            case 'rock':
                break;
            case 'paper':
                scoreComputer++;
                break;
            case 'scissors':
                scorePlayer++;
                break;
        }    
    }
    else if (playerSelection === 'paper') {
        switch(computerSelection) {
            case 'paper':
                break;
            case 'scissors':
                scoreComputer++;
                break;
            case 'rock':
                scorePlayer++;
                break;
        }    
    }
    else if (playerSelection === 'scissors') {
        switch(computerSelection) {
            case 'scissors':
                break;
            case 'rock':
                scoreComputer++;
                break;
            case 'paper':
                scorePlayer++;
                break;
        }    
    }
    
    results.textContent = `${scorePlayer} : ${scoreComputer}`;  
    
    if (scorePlayer === 5) {
        final.style.color = 'green';
        final.textContent = "You won the game!";
        scorePlayer = 0;
        scoreComputer = 0;
        choices.style.color = 'blue';
        choices.textContent = "Make your choice to start again!";
    }
    else if (scoreComputer === 5) {
        final.style.color = 'red';
        final.textContent = "You lose the game!";        
        scorePlayer = 0;
        scoreComputer = 0;
        choices.style.color = 'blue';
        choices.textContent = "Make your choice to start again!";
    }    
}