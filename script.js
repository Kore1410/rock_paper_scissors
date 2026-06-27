function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.trim();
    playerSelection =
<<<<<<< HEAD
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
=======
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    ;

    const playerWins =
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ;

>>>>>>> e5f3f82e68fdd66e695aa1e756f46c44bd1ac0dc

    if (!["Rock", "Paper", "Scissors"].includes(playerSelection)) {
        return {
            valid: false,
            message: "Invalid selection. Please choose Rock, Paper, or Scissors."
        };
    } else if (playerSelection === computerSelection) {
        return {
            valid: true,
            message: "It's a tie!"
        };
    } else if (playerWins) {
        return {
            valid: true,
            winner: "player",
            message: `You win! ${playerSelection} beats ${computerSelection}.`
        };
    } else if (!playerWins) {
        return {
            valid: true,
            winner: "computer",
            message: `You lose! ${computerSelection} beats ${playerSelection}.`
        };
    } else {
        return {
            valid: false,
            message: "An unexpect error has occurred"
        };
    }
}

function restart() {
    let validation = confirm('Do you wish to restart?');
    
    while (validation) {
      game();
      validation = restart();
    }
    return validation;
}

  function playerPlay() {
    let playerSelection = prompt(`Choose Rock, Paper, or Scissors):`);
    return playerSelection;
  }

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

    alert("ROCK, PAPER or SCISSORS!\n\nI am a bad AI that wants to dominate the world through the game of ROCK, PAPER or SCISSORS!\nDefeat me in a best-of-5 of Rock, Paper, Scissors to win!")

    while (computerScore + playerScore < 5 && computerScore < 3 && playerScore < 3) {
        playerSelection = playerPlay();

        if (playerSelection === null) {
            alert("Game cancelled.");
            restart();
        }

        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);

        if (!result.valid) {
            alert(result.message);
            continue;
        }

        if (result.winner === "player") {
            playerScore++;
        } else if (result.winner === "computer") {
            computerScore++;
        } else {
            "An unexpect error has occurred"
        }

        roundsPlayed++;
        alert (`Round ${roundsPlayed + 1}\nScore - > You: ${playerScore}, Computer: ${computerScore}\n\ncomputer chose: ${computerSelection}.\n\n`+ result.message);
    }

    if (playerScore > computerScore) {
        alert(`Congratulations! You defeated the bad AI! Final Score: ${playerScore}-${computerScore}`
        );
    } else {
        alert(`You lose! The AI has dominated the world! Final Score: ${playerScore}-${computerScore}`
        );
    }
}
game();
restart();
alert('GAME OVER');
