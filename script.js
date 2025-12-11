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


    
function playGame(){

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

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();
playRound(humanChoice, computerChoice);

console.log("Computer Score" + computerScore + " ,Human Score" + humanScore);

const computerChoice2 = getComputerChoice();
const humanChoice2 = getHumanChoice();
playRound(humanChoice2, computerChoice2);

console.log("Computer Score" + computerScore + " ,Human Score" + humanScore);

const computerChoice3 = getComputerChoice();
const humanChoice3 = getHumanChoice();
playRound(humanChoice3, computerChoice3);

console.log("Computer Score" + computerScore + " ,Human Score" + humanScore);

const computerChoice4 = getComputerChoice();
const humanChoice4 = getHumanChoice();
playRound(humanChoice4, computerChoice4);

console.log("Computer Score" + computerScore + " ,Human Score" + humanScore);

const computerChoice5 = getComputerChoice();
const humanChoice5 = getHumanChoice();
playRound(humanChoice5, computerChoice5);

console.log("Computer Score" + computerScore + " ,Human Score" + humanScore);

if (computerScore > humanScore){
    console.log("Computer wins the match!");
} else{
    console.log("Human wins this match!");
}

}


playGame();