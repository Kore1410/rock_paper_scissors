function computerPlay (){
    choices = ['Rock', 'Paper', 'Scissors'];
    randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function playRound (playerSelection, computerSelection) {
    player = playerSelection.toLowerCase(); //Case-Insensitive
    computer = computerSelection.toLowerCase(); //Case-Insensitive

    if (player === computer){
        return `It\'s a tie! Both chose ${player}`;
    }

    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ){
        winMove = player;
        loseMove = computer;
        return `You Win! ${winMove} beats ${loseMove}`;
    }

    else {
         winMove = computer;
        loseMove = player;
        return `You Lose! ${winMove} beats ${loseMove}`;
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));