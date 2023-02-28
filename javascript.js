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

    let result = [];

    if (playCompare(playerSelection, computerSelection) === "draw"){
        result[0] = `Battle to a draw!`;
        result[1] = 0;
    } else if (playCompare(playerSelection, computerSelection) === "playerWin"){
        result[0] = `You Win! ${playerSelection}(you) beats ${computerSelection}(pc)`;
        result[1] = 1;
    }else{
        result[0] = `You Lose! ${computerSelection}(pc) beats ${playerSelection}(you)`;
        result[1] = -1;
    }
    return result;
}

function showScore(singleResult, player_win, draw, player_lose) {
    
}

const buttons = document.querySelectorAll('button');
const resultContainer = document.querySelector('.result');
const resultContent = document.createElement('h2');
resultContent.style.cssText = 'text-align: center;';
const runningScore = document.createElement('h3');

let player_win = 0;
let draw = 0;
let pc_win = 0;

buttons.forEach(button => {
    
    button.addEventListener('click', ()=>{
        let playerSelection = button.id;
        let resultArray = playRound(playerSelection, getComputerChoice());

        resultContent.classList.add('content');
        resultContent.textContent = resultArray[0];
        resultContainer.appendChild(resultContent);
        switch (resultArray[1]) {
            case -1:
                pc_win += 1; 
                break;
            case 0:
                draw += 1; 
                break;
            case 1:
                player_win += 1;
                break;
            default:
                break;
        }

        console.log(`player_win = ${player_win}, draw = ${draw}, pc_win = ${pc_win}`);
    })
});




//   function game(playerSelection){
//     for (let i = 1; i <= 5; i++) {
//         let playerSelection = prompt(`round ${i} : rock, papper, scissor?`);
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));      
//     }
//   }


//   const playerSelection = "rock";
//   game(playerSelection);

