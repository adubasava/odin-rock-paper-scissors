let scorePlayer = 0;
let scoreComputer = 0;

// Computer random choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * choices.length);
    return choices[choice]
}

// Player choice case-insensitive (white spaces trimmed)
function getPlayerChoice() {
    const choice = prompt("Rock, paper or scissors?").trim().toLowerCase(); 
    return choice
}

// Single round
function playRound(playerSelection, computerSelection) {
    console.log("Your choice: " + playerSelection + ". " + "Computer choice: " + computerSelection);

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
    else {
        alert("Enter correct choice!");
        return 2;
    }      
  }
  
function playGame() {
    // Number of rounds
    let j = 5;
    // Rounds
    for (let i = 0; i < j; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();

        result = playRound(playerSelection, computerSelection);
        if (result === 1) {
            scorePlayer++;
        }
        else if (result === -1) {
            scoreComputer++;
        }
        // If player entered incorrect choice, number of rounds is increased
        else if (result === 2) {
            j++;
        }
    }

    // Final score
    if (scorePlayer > scoreComputer) {
        alert("You win the game!")
    }
    else if (scoreComputer > scorePlayer) {
        alert("You lose the game!")
    }
    else {
        alert("It's a tie! Game over!")
    }
    console.log("Your score: " + scorePlayer + ". " + "Computer score: " + scoreComputer) 
  }

playGame();  