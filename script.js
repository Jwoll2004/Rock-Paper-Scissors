function getComputerChoice(){
    const options = ["rock", "paper", "scissor"];
    return options[Math.floor(Math.random()*options.length)];
}

console.log(getComputerChoice());