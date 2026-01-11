function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getHumanChoice() {
    return prompt("rock/paper/scissors").toLowerCase();
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") 
                alert("Rock vs Rock. It's a draw!");
            else if (computerChoice === "paper")
                alert("Rock vs Paper. You Lose!");
            else
                alert("Rock vs Scissors. You win!");    
            break;

        case "paper":
            if (computerChoice === "rock") alert("Paper vs Rock. You win!");
            else if (computerChoice === "paper") alert("Paper vs Paper. It's a draw!");
            else alert("Paper vs Scissors. You Lose!");    
            break;

        case "scissors":
            computerChoice === "scissors" ? alert("Scissors vs Rock. You Lose!") : computerChoice === "paper" ? alert("Scissors vs Paper. You Win!") : alert("Scissors vs Scissors. It's a draw!");    
            break;
    }
}

playRound(humanSelection, computerSelection);