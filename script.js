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

const results = document.querySelector('#results');
const choices = document.querySelector('p');
const final = document.querySelector('h3');

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    final.style.color = 'indigo';
    final.style.fontSize = '24px';
    final.textContent = "Score:";
    choices.style.color = 'gray';
    choices.innerHTML = "Your choice: " + "<strong>" + playerSelection + "</strong>" + ". " + "Computer choice: " + "<strong>" + computerSelection + "</strong>";
   
    if (playerSelection === 'rock') {
        switch(computerSelection) {
            case 'rock':
                choices.innerHTML += "<br>" + "<br>" + "<center>" + "<p style='color:#008CBA;'>" + "Tie!" + "</style>" + "</center>";
                break;
            case 'paper':
                scoreComputer++;
                choices.innerHTML += "<br>" + "<br>" + "<center>" + "<p style='color:#f44336;'>" + "Paper beats rock" + "</style>" + "</center>";
                break;
            case 'scissors':
                scorePlayer++;
                choices.innerHTML += "<br>" + "<br>" + "<center>" + "<p style='color:#04AA6D;'>" + "Rock beats scissors" + "</style>" + "</center>";
                break;
        }    
    }
    else if (playerSelection === 'paper') {
        switch(computerSelection) {
            case 'paper':
                choices.innerHTML += "<br>" + "<br>" + "<center>" + "<p style='color:#008CBA;'>" + "Tie!" + "</style>" + "</center>";
                break;
            case 'scissors':
                scoreComputer++;
                choices.innerHTML += "<br>" + "<br>" + "<center>" + "<p style='color:#f44336;'>" + "Scissors beats paper" + "</style>" + "</center>";
                break;
            case 'rock':
                scorePlayer++;
                choices.innerHTML += "<br>" + "<br>" + "<center>" + "<p style='color:#04AA6D;'>" + "Paper beats rock" + "</style>" + "</center>";
                break;
        }    
    }
    else if (playerSelection === 'scissors') {
        switch(computerSelection) {
            case 'scissors':
                choices.innerHTML += "<br>" + "<br>" + "<center>" + "<p style='color:#008CBA;'>" + "Tie!" + "</style>" + "</center>";
                break;
            case 'rock':
                scoreComputer++;
                choices.innerHTML += "<br>" + "<br>" + "<center>" + "<p style='color:#f44336;'>" + "Rock beats scissors" + "</style>" + "</center>";
                break;
            case 'paper':
                scorePlayer++;
                choices.innerHTML += "<br>" + "<br>" + "<center>" + "<p style='color:#04AA6D;'>" + "Scissors beats paper" + "</style>" + "</center>";
                break;
        }    
    }
    
    results.style.padding = '8px';
    results.textContent = `${scorePlayer} : ${scoreComputer}`;   

    if (scorePlayer === 5) {
        final.style.color = 'green';
        final.style.fontSize = '32px';
        final.textContent = "You won the game!";
        scorePlayer = 0;
        scoreComputer = 0;
        choices.style.color = 'indigo';
        choices.textContent = "Make your choice to start again!";
    }
    else if (scoreComputer === 5) {
        final.style.color = 'red';
        final.style.fontSize = '32px';
        final.textContent = "You lose the game!";        
        scorePlayer = 0;
        scoreComputer = 0;
        choices.style.color = 'indigo';
        choices.textContent = "Make your choice to start again!";
    }    
}