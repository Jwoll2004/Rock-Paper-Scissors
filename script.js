
function getComputerChoice() {
    const options = ["✊", "✋", "✌️"];
    return options[Math.floor(Math.random() * options.length)];
}

// while (numberOfRounds < 5) {
//     let playerSelection = prompt("Enter your move!");
//     let ComputerSelection = getComputerChoice();
//     console.log("Round Number: " + (numberOfRounds + 1) + " Your Choice: " + playerSelection + " Computer Choice: " + ComputerSelection);

//     playRound(playerSelection.toLowerCase(), ComputerSelection);
// }

function restart() {
    rebtn.addEventListener('click', () => {
        playerwins = 0;
        computerwins = 0;
    })
}
function playRound(playerSelection, ComputerSelection) {
    //console.log("HELLO");
    if (playerSelection === ComputerSelection) {
        standing.textContent = "TIE!";
        //div.textContent = "It's a tie!!! Play Again!";
        //console.log("It's a tie!!! Play Again!");
    }
    else if (playerSelection == "✊") {
        if (ComputerSelection == "✌️") {
            standing.textContent = "WIN!";
            playerwins++;
            //console.log("You Win!!! :D ✊ defeats ✌️!");
        }
        else {
            standing.textContent = "LOSE!";
            computerwins++;
            //console.log("You Lose :\"( ✊ loses to ✋");
        }
    }
    else if (playerSelection == "✋") {
        if (ComputerSelection == "✊") {
            standing.textContent = "WIN!";
            playerwins++;
            //console.log("You Win!!! :D ✋ defeats ✊!");
        }
        else {
            standing.textContent = "LOSE!";
            computerwins++;
            //console.log("You Lose :\"( ✋ loses to ✌️");
        }
    }
    else if (playerSelection == "✌️") {
        if (ComputerSelection == "✋") {
            standing.textContent = "WIN!";
            playerwins++;
            //console.log("You Win!!! :D ✌️ defeat ✋!");
        }
        else {
            standing.textContent = "LOSE!";
            computerwins++;
            //console.log("You Lose :\"( ✌️ lose to ✊");
        }
    }

    myscore.textContent = `${playerwins}`;
    pcscore.textContent = `${computerwins}`;

    const rebtn = document.createElement('button');
    rebtn.textContent = "RESTART";
    //style the rebtn white border
    rebtn.style.border = "2px solid white";
    rebtn.style.fontFamily = "Honk";
    rebtn.style.padding = "10px";
    rebtn.style.marginTop = "20px";
    const finalwin = document.createElement('div');
    if (playerwins == 5) {
        finalwin.textContent = "YOU HAVE WON THE GAME!";
        standing.appendChild(finalwin);
        standing.appendChild(rebtn);
    }
    if (computerwins == 5) {
        finalwin.textContent = "YOU HAVE LOST THE GAME!";
        standing.appendChild(finalwin);
        standing.appendChild(rebtn);
    }
    rebtn.addEventListener('click', () => {
        standing.removeChild(finalwin);
        standing.removeChild(rebtn);

        pcmove.textContent = "?";
        mymove.textContent = "?";
        playerwins = 0; myscore.textContent = 0;
        computerwins = 0; pcscore.textContent = 0;
    })
}

const buttons = document.querySelectorAll('button');
const mymove = document.querySelector('.mymove');
const pcmove = document.querySelector('.pcmove');
const standing = document.querySelector('.standing');
const myscore = document.querySelector('.myscore');
const pcscore = document.querySelector('.pcscore');

let computerwins = 0;
let playerwins = 0;
let numberOfRounds = 1;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(playerwins == 5 || computerwins == 5){
                return;
            }
            let pcchoice = getComputerChoice();
            mymove.textContent = `${button.textContent}`;
            pcmove.textContent = `${pcchoice}`;
            playRound(button.textContent, pcchoice);
        });
    });
