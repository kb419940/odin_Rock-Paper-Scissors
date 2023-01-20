function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);   //generate 0~2
    let rockpapperscissorArray = ["Rock","Paper","Scissors"];

    return rockpapperscissorArray[randomNumber];
}

for (let i = 0; i <= 10; i++) {
    console.log(getComputerChoice());
}