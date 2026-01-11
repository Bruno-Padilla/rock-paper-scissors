function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getHumanChoice() {
    return prompt("rock/paper/scissors").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") return "Rock vs Rock. It's a draw!";
            else if (computerChoice === "paper") return "Rock vs Paper. You Lose!";
            else return "Rock vs Scissors. You Win!";    
            break;

        case "paper":
            if (computerChoice === "rock") return "Paper vs Rock. You win!";
            else if (computerChoice === "paper") return "Paper vs Paper. It's a draw!";
            else return "Paper vs Scissors. You Lose!";    
            break;

        case "scissors":
            if (computerChoice === "rock") return "Scissors vs Rock. You Lose!"
            else if (computerChoice === "paper") return "Scissors vs Paper. You Win!"
            else return "Scissors vs Scissors. It's a draw!";    
            break;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i=0; i<5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        alert(result);

        if (result.toLowerCase().includes("win")) ++humanScore
        else if (result.toLowerCase().includes("lose")) ++computerScore
    }

    alert(getWinner(humanScore, computerScore));
}

function getWinner(humanScore, computerScore) {
    if (humanScore > computerScore) return "Absolute winner: Human!!!"
    else return "Absolute winner: Computer!!!"
}

playGame();