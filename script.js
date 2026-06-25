function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) 
{
    playerSelection =
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (!["Rock", "Paper", "Scissors"].includes(playerSelection)) 
    {
        return{
            valid: false,
            message: "Invalid selection. Please choose rock, paper, or scissors."
        };
    }

    if (playerSelection === computerSelection) {
        return {
            valid: true,
            winner: "tie",
            message: "It's a tie!"
        };
    }

    const playerWins =
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper");

        if (playerWins) {
            return {
                valid: true,
                winner: "player",
                message: `You win! ${playerSelection} beats ${computerSelection}.`
            };
        }

        return {
            valid: true,
            winner: "computer",
            message: `You lose! ${computerSelection} beats ${playerSelection}.`
        };
    }

function game() {
        let playerScore = 0;
        let computerScore = 0;
        let roundsPlayed = 0;

        console.log ("ROCK, PAPER or SCISSORS!")
        console.log ("I am a bad AI that wants to dominate the world through the game of ROCK, PAPER or SCISSORS!")
        console.log ("Defeat me in 5 rounds of Rock, Paper Scissors to win!")

        while (roundsPlayed < 5) {
            const playerSelection = prompt(`Round ${roundsPlayed + 1}/5\nChoose rock, paper, or scissors):`);

            if (playerSelection === null) {
                console.log("Game cancelled.");
                return;
            }

            const computerSelection = computerPlay();
            const result = playRound(playerSelection, computerSelection);

            

            if (!result.valid) {
                alert(`Computer Chose: ${computerSelection}\n${result.message}`);
                continue;
            }
            
            console.log(`Computer chose: ${computerSelection}`);
            console.log(result.message);

            if (result.winner === "player")
            {
                playerScore++;
            }
            else if (result.winner === "computer") 
            {
                computerScore++;
            }

            console.log(
                `Score - > You: ${playerScore}, Computer: ${computerScore}`
            );

            roundsPlayed++;
        }

        console.log("==============================");

        if (playerScore > computerScore) {
            console.log(`Congratulations! You defeated the bad AI! Final Score: ${playerScore}-${computerScore}`
            );
        }
        else if (computerScore > playerScore) {
            console.log (`You lose! The AI has dominated the world! Final Score: ${computerScore}-${playerScore}`
            );
        }
        else {
            console.log (`It's a tie! Final Score: ${playerScore}-${computerScore}`
            )
        }
}
game();
