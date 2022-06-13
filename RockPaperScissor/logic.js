console.log("Hello World!");

function computerPlay(){
    console.log("Computer's turn!");
    const choice = ["Rock", "Paper", "Scissor"];
    let intChoice = Math.floor((Math.random() * 3));
    let computerChoice = choice[intChoice].toLowerCase();
    return computerChoice;
}

function playRound(player, computer){
    console.log("Player choice : " + player);
    console.log("Computer choice : " + computer);
    let result = "Its a DRAW!!";
    let wins = 0;

    if(player == 'rock' && computer == 'scissor'){
        result = "Rock beats Scissors, you WIN!!!";
        wins++;
    }

    else if(player == 'rock' && computer == 'paper'){
        result = "Paper beats Rock, you LOOSE!!";  
    }

    else if(player == 'paper' && computer == 'rock'){
        result = "Paper beats Rock, you WIN!!";
        wins++;
    }

    else if(player == 'paper' && computer == 'scissor'){
        result = "Scissors beats Paper, you LOOSE!!";
    }

     else if(player == 'scissor' && computer == 'paper'){
        result = "Scissors beats Paper, you Win!!";
        wins++;
    }

    else if(player == 'scissor' && computer == 'rock'){
        result = "Rock beats Scissor, you LOOSE!!";
    }

        console.log(result);
        return wins;
}

function game(){
let score = 0;
    for(let i = 0; i<5; i++){
        playerSelection = prompt("Please enter your choice", "Rock / Paper / Scissor").toLowerCase();
        const computerSelection = computerPlay();
        score += playRound(playerSelection, computerSelection);
        console.log(" ");
    }
    declareWinner(score);
}
function declareWinner(score){
    if(score >= 3){
        console.log("");
        console.log("Congratulations, you WIN!!");
    }
    else{
        console.log("Sorry you LOOSE!!");
    }
}
    
game();