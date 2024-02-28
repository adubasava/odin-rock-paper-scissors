let scoreUser = 0;
let scoreComputer = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * choices.length);
    return choices[choice]
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);

    if (playerSelection === 'rock') {
        switch(computerSelection) {
            case 'rock':
                alert("It's a tie!");
                return 0;
            case 'paper':
                alert("You Lose! Paper beats Rock");
                return -1;
            case 'scissors':
                alert("You Win! Rock beats Scissors");
                return 1;
        }    
    }
    else if (playerSelection === 'paper') {
        switch(computerSelection) {
            case 'paper':
                alert("It's a tie!");
                return 0;
            case 'scissors':
                alert("You Lose! Scissors beats Paper");
                return -1;
            case 'rock':
                alert("You Win! Paper beats Rock");
                return 1;
        }    
    }
    else if (playerSelection === 'scissors') {
        switch(computerSelection) {
            case 'scissors':
                alert("It's a tie!");
                return 0;
            case 'rock':
                alert("You Lose! Rock beats Scissors");
                return -1;
            case 'paper':
                alert("You Win! Scissors beats Paper");
                return 1;
        }    
    }      
  }
  
  function playGame() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        result = playRound(playerSelection, computerSelection);
        if (result === 1) {
            scoreUser++;
        }
        else if (result === -1) {
            scoreComputer++;
        }
    }
    if (scoreUser > scoreComputer) {
        alert("You win the game!")
    }
    else if (scoreComputer > scoreUser) {
        alert("You lose the game!")
    }
    else {
        alert("It's a tie! Game over!")
    }
    console.log(scoreUser, scoreComputer) 
  }

  playGame();  