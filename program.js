/* - - - HTML ELEMENTS - - - */

// Score labels
let label_humanScore = document.querySelector("#human-score");
let label_computerScore = document.querySelector("#computer-score");

// Selection images
let image_humanSelection = document.querySelector("#human-selection");
let image_computerSelection = document.querySelector("#computer-selection");

// Buttons
const buttons = document.querySelector("#buttons");


/* - - - FUNCTIONS - - - */

// Function to update the scoreboard
function updateScoreboard(humanScore, computerScore) {
    label_humanScore.textContent = humanScore;
    label_computerScore.textContent = computerScore;
}

// Function to update the players selection
function updatePlayersSelection(humanSelection, computerSelection) {
    image_humanSelection.src = humanSelection;
    image_computerSelection.src = computerSelection;
}

// Function to set up the hub (score and images)
function hubSetUp(humanScore, computerSocer, humanSelection, computerSelection) {
    updateScoreboard(humanScore, computerSocer);
    updatePlayersSelection(humanSelection, computerSelection);
}

// Function to get the human's selection
function getHumanSelection(btnClicked) {
    return btnClicked.split("-").at(0);
}

// Function to get the computer's selection
function getComputerSelection() {
    const options = ["rock", "paper", "scissors"];
    const randomNumber_0to2 = Math.floor(Math.random() * 3);
    return options[randomNumber_0to2];
}

// Function to determine the winner of the round
function playRound(humanSelection, computerSelection) {
    // Add 1 point to the winner
    switch (humanSelection) {
        case "rock":
            if (computerSelection === "paper") computerScore++;
            else if (computerSelection === "scissors") humanScore++;
            break;

        case "paper":
            if (computerSelection === "rock") humanScore++;
            else if (computerSelection === "scissors") computerScore++;
            break;

        case "scissors":
            if (computerSelection === "rock") computerScore++;
            else if (computerSelection === "paper") humanScore++;
            break;
    }
}

// Alert if somebody wins
function alertIfWinner() {
    if (humanScore === 3) {
        confirm("You Win!");
        location.reload()
    }

    else if (computerScore === 3) {
        confirm("Computer Wins!");
        location.reload();
    }
}


/* - - - LISTENERS - - - */

buttons.addEventListener("click", (eventObject) => {
    // Get the button clicked
    let btnClicked = eventObject.target.closest("button").id;

    // Get and update players selections
    let humanSelection = getHumanSelection(btnClicked);
    let computerSelection = getComputerSelection();
    updatePlayersSelection(`./images/${humanSelection}.png`, `./images/${computerSelection}.png`);
    
    // Play round and update the winner
    playRound(humanSelection, computerSelection);
    updateScoreboard(humanScore, computerScore);

    // Alert if somebody wins
    setTimeout(() => alertIfWinner(), 100);
});


/* - - - GAME LOGIC - - - */ 

let humanScore = 0;
let computerScore = 0;

hubSetUp( 
    humanScore = 0,
    computerScore = 0,
    humanSelection = "./images/question-mark.png", 
    computerSelection = "./images/question-mark.png"
);