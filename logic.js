console.log("-------------Lets Play Rock, Paper, Scissor!-------------");
console.log(" ");

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');
var result = document.getElementById('result');
var roundTxt = document.getElementById('roundTxt');
var user = 0;
var cpu = 0;
    
const playerOptions = [rockBtn,paperBtn,scissorBtn];

//computer picks rock/paper/scissor
function computerPlay(){
    const choice = ["Rock", "Paper", "Scissor"];
    let intChoice = Math.floor((Math.random() * 3));
    let computerChoice = choice[intChoice].toLowerCase();
    return computerChoice;
}

//play single round of rock paper scissor
function playRound(player, computer){
    console.log("Player choice : " + player);
    console.log("Computer choice : " + computer);
    console.log("**************");
    let result = "";

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
    }

    roundTxt.textContent = result;
}

function game(){
    for(let i=0; i<playerOptions.length; i++){
        playerOptions[i].addEventListener('click', function (){
            if(user < 5 && cpu < 5){
                playRound(playerOptions[i].value, computerPlay());
                result.textContent = "User Score : " + user + " Computer Score : "+ cpu;
            }
            else if(user == 5 ){
                roundTxt.textContent = "Congratulations!! you WIN!! Reload page to play again!!";
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorBtn.disabled = true;
            }
            else if(cpu == 5){
                roundTxt.textContent = "Sorry!! you LOOSE!! Reload page to play again!!";
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorBtn.disabled = true;
            }
        });
    }
}

game();
