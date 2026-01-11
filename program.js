function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getHumanChoice() {
    return prompt("rock/paper/scissors").toLowerCase();
}
