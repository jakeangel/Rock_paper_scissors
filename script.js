function getComputerChoice(){
    let randomNumber = Math.random();
    if(randomNumber <= .33){
        return "rock";
    } else if (randomNumber <= .66 && randomNumber > .33){
        return "scissors";
    } else{
        return "paper";
    }

}


function getHumanChoice(){
    let userInput = prompt("Choose rock, paper, or scissors.", " ").toLowerCase();
    return userInput;
    }


   


const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();



let humanScore = 0;

let computerScore = 0;

function playRound(humanSelection, computerSelection){
    if(humanSelection === computerSelection){
        console.log("Draw!");
    } else if(humanSelection == "rock" && computerSelection == "scissors"){
        console.log("You win! Rock beats scissors.");
        humanScore++;
    } else if(humanSelection == "rock" && computerSelection == "paper"){
        console.log("You lose! Paper beats rock.");
        computerScore++;
    } else if(humanSelection == "paper" && computerSelection == "rock"){
        console.log("You win! paper beats rock");
        humanScore++;
    } else if(humanSelection == "paper" && computerSelection == "scissors"){
        console.log("You lose! scissors beats paper");
        computerScore++;
    } else if(humanSelection == "scissors" && computerSelection == "rock"){
        console.log("You lost! Rock beats scissors");
        computerScore++;
    } else if(humanSelection == "scissors" && computerSelection == "paper"){
        console.log("You win! scissors beats paper");
        humanScore++;
    }

}


playRound(humanChoice, computerChoice);

 