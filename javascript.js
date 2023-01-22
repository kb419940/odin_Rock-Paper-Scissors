function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);   //generate 0~2
    let rockpapperscissorArray = ["rock","paper","scissors"];

    return rockpapperscissorArray[randomNumber];
}

function playCompare(userChoice, computerChoice){
    let result = "";
    // console.log("userChoice: " + userChoice);
    console.log("computerChoice: " + computerChoice);
    if(userChoice === computerChoice){
        result = "draw";
    }else if((userChoice === "rock") && (computerChoice === "scissors")){
        result = "playerWin";
    }else if((userChoice === "paper") && (computerChoice === "rock")){
        result = "playerWin";
    }else if((userChoice === "scissors") && (computerChoice === "paper")){
        result = "playerWin";
    }
    else{
        result = "playerLose";
    }
    return result;
}

function playRound(playerSelection, computerSelection) {

    let result = ``;

    if (playCompare(playerSelection, computerSelection) === "draw"){
        result = `Battle to a draw!`;
    } else if (playCompare(playerSelection, computerSelection) === "playerWin"){
        result = `You Win! ${playerSelection}(you) beats ${computerSelection}(pc)`;
    }else{
        result = `You Lose! ${computerSelection}(pc) beats ${playerSelection}(you)`;
    }
    return result;
  }
  
  function game(playerSelection){
    for (let i = 1; i <= 5; i++) {
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));      
    }
  }


  const playerSelection = "rock";
  game(playerSelection);

