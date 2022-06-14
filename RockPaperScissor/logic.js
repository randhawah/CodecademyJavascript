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
    let result = "";
    let user = 0;
    let cpu = 0;
    let draw = 0;

    if(player == 'rock' && computer == 'scissor'){
        result = "Rock beats Scissors, you WIN!!!";
        user++;
    }

    else if(player == 'rock' && computer == 'paper'){
        result = "Paper beats Rock, you LOOSE!!";  
        cpu++;
    }

    else if(player == 'paper' && computer == 'rock'){
        result = "Paper beats Rock, you WIN!!";
        user++;
    }

    else if(player == 'paper' && computer == 'scissor'){
        result = "Scissors beats Paper, you LOOSE!!";
        cpu++;
    }

     else if(player == 'scissor' && computer == 'paper'){
        result = "Scissors beats Paper, you Win!!";
        user++;
    }

    else if(player == 'scissor' && computer == 'rock'){
        result = "Rock beats Scissor, you LOOSE!!";
        cpu++;
    }
    else{
        result = "Its a DRAW!!";
        draw++;
    }

        console.log(result);
        return arrayFromArgs(user, cpu, draw);
}


function arrayFromArgs() {
    var results = [];
    for (var i = 0; i < arguments.length; i++) {
        results.push(arguments[i]);
    }
    return results;
}


function game(){
//let score = new Array();
let wins = 0;
let looses = 0;
let draws = 0;
    for(let i = 0; i<5; i++){
        let playerSelection = prompt("Please enter your choice", "Rock / Paper / Scissor").toLowerCase();
        let computerSelection = computerPlay();
        let score = playRound(playerSelection, computerSelection);
        wins += score[0];
        looses += score[1];
        draws += score[2];
        console.log(" ");
    }

    console.log("Wins : " + wins);
    console.log("Lost : " + looses);
    console.log("Draws : " + draws);


    if(wins>looses){
        console.log("");
        console.log("Congratulations, you WIN!!");
    }
    else if(wins<looses){
        console.log("Sorry you LOOSE!!");
    }
    else{
        console.log("It was a DRAW!!");
    }

}
    
game();