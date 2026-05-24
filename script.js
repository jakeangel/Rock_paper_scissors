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



    
function playGame(){

let humanScore = 0;
let computerScore = 0;

let div = document.createElement('div');
document.body.appendChild(div);
let result = document.createElement('p');
let score = document.createElement('p');
let announceWinner = document.createElement('p');
div.append(result, score, announceWinner);

function playRound(humanSelection, computerSelection){
   
  

    if(humanSelection === computerSelection){
        result.textContent = "Draw!";
    } else if(humanSelection == "rock" && computerSelection == "scissors"){
        result.textContent = "You win! Rock beats scissors.";
        humanScore++;
    } else if(humanSelection == "rock" && computerSelection == "paper"){
        result.textContent = "You lose! Paper beats rock.";
        computerScore++;
    } else if(humanSelection == "paper" && computerSelection == "rock"){
       result.textContent = "You win! paper beats rock";
        humanScore++;
    } else if(humanSelection == "paper" && computerSelection == "scissors"){
        result.textContent = "You lose! scissors beats paper";
        computerScore++;
    } else if(humanSelection == "scissors" && computerSelection == "rock"){
        result.textContent = "You lost! Rock beats scissors";
        computerScore++;
    } else if(humanSelection == "scissors" && computerSelection == "paper"){
        result.textContent = "You win! scissors beats paper";
        humanScore++;
    }

    
    if ( humanScore === 5){
    announceWinner.textContent = "Human is the winner!";
    } else if( computerScore === 5) {
        announceWinner.textContent = "Computer is the winner!";
       
    }

   


}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissors");


    rock.addEventListener('click', function (event){
    let computerChoice = getComputerChoice();
    playRound(event.currentTarget.id, computerChoice);
    score.textContent = "Computer Score" + computerScore + " ,Human Score" + humanScore;
   

   
})

    paper.addEventListener('click', function (event){
    let computerChoice2 = getComputerChoice();
    playRound(event.currentTarget.id, computerChoice2);
    score.textContent = "Computer Score" + computerScore + " ,Human Score" + humanScore;
    
})

    scissor.addEventListener('click', function (event){
    let computerChoice3 = getComputerChoice();
    playRound(event.currentTarget.id, computerChoice3);
    score.textContent = "Computer Score" + computerScore + " ,Human Score" + humanScore;
    

})







}
playGame();