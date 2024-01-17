function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, ComputerSelection){
    if(playerSelection === ComputerSelection){
        console.log("It's a tie!!! Play Again!");
        game();
    }
    else if(playerSelection == "rock"){
        if(ComputerSelection == "scissors")
            console.log("You Win!!! :D Rock defeats Scissors!");
        else
            console.log("You Lose :\"( Rock loses to Paper");
    }
    else if(playerSelection == "paper"){
        if(ComputerSelection == "rock")
            console.log("You Win!!! :D Paper defeats Rock!");
        else
            console.log("You Lose :\"( Paper loses to Scissors");
    }
    else if(playerSelection == "scissors"){
        if(ComputerSelection == "paper")
            console.log("You Win!!! :D Scissors defeat Paper!");
        else
            console.log("You Lose :\"( Scissors lose to Rock");
    }
    
}

function game(){
    let playerSelection = prompt("Enter your move!");
    let ComputerSelection = getComputerChoice();
    console.log("Your Choice: " + playerSelection + " Computer Choice: " + ComputerSelection);
    playRound(playerSelection.toLowerCase(), ComputerSelection);
}
game();