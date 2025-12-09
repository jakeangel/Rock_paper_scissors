function getComputerChoice(){
    let randomNumber = Math.random();
    if(randomNumber <= .33){
        return "Rock";
    } else if (randomNumber <= .66 && randomNumber > .33){
        return "scissors";
    } else{
        return "Paper";
    }

}

let computerChoice = getComputerChoice();
console.log(computerChoice);


