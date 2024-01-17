function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function game() {
    while(numberOfRounds < 5) {
        let playerSelection = prompt("Enter your move!");
        let ComputerSelection = getComputerChoice();
        console.log("Round Number: " + (numberOfRounds+1) + " Your Choice: " + playerSelection + " Computer Choice: " + ComputerSelection);

        playRound(playerSelection.toLowerCase(), ComputerSelection);
    }
    function playRound(playerSelection, ComputerSelection) {
        if (playerSelection === ComputerSelection) {
            console.log("It's a tie!!! Play Again!");
            game();
        }
        else if (playerSelection == "rock") {
            if (ComputerSelection == "scissors"){
                console.log("You Win!!! :D Rock defeats Scissors!");
                playerwins++;
            }
            else{
                console.log("You Lose :\"( Rock loses to Paper");
                computerwins++;
            }
        }
        else if (playerSelection == "paper") {
            if (ComputerSelection == "rock"){
                console.log("You Win!!! :D Paper defeats Rock!");
                playerwins++;
            }
            else{
                console.log("You Lose :\"( Paper loses to Scissors");
                computerwins++;
            }
        }
        else if (playerSelection == "scissors") {
            if (ComputerSelection == "paper"){
                console.log("You Win!!! :D Scissors defeat Paper!");
                playerwins++;
            }
            else{
                console.log("You Lose :\"( Scissors lose to Rock");
                computerwins++;
            }
        }
        numberOfRounds++;

    }
}

let playerwins = 0;
let computerwins = 0;
let numberOfRounds = 0;
console.log("Welcome to a Best-of-Five Rock, Paper, Scissors game.");
game();

if(playerwins > computerwins){
    console.log("Congratulations! You have Won the game!!! " + "You: " + playerwins + " Computer: " + computerwins);
}
else{
    console.log("Oops You Lost the Game :( " + "You: " + playerwins + " Computer: " + computerwins);
}