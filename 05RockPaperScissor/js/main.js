
let playerScoreBoard = document.querySelector('#userScoreVal')
let computerScoreBoard = document.querySelector('#compScoreVal')

let playerScore = 0;
let computerScore = 0;

// let userResult = document.querySelector('#result-user-stat')
// let compResult = document.querySelector('#result-comp-stat')
// let finalResult = document.querySelector('#result-final-stat')

let user = document.querySelector('#user')
let com = document.querySelector('#com')
let result = document.querySelector('#winner')


let r = document.querySelector('#r').attributes.id.nodeValue
let p = document.querySelector('#p').attributes.id.nodeValue
let s = document.querySelector('#s').attributes.id.nodeValue

let rock = document.querySelector('#r')
let paper = document.querySelector('#p')
let scissors = document.querySelector('#s')



// Method to return an random element
const elements = () => {
    // Random index 0 - 2
    let randomIndex = Math.floor(Math.random() * 3);
    let ele = [r, p ,s]
    let eleInString = ele[randomIndex];

    if(eleInString == "r"){
        return "rock";
    }else if( eleInString === "p"){
        return "paper";
    }else{
        return "scissors";
    }
}



rock.addEventListener('click', function () {
    let computer = elements()
    console.log('user : rock')
    console.log(`computer : ${computer}`);
    user.innerHTML = "rock"
    com.innerHTML = computer
    winner('rock', computer)
})

paper.addEventListener('click', function () {
    let computer = elements()
    console.log('user : paper')
    console.log(`computer : ${computer}`);
    user.innerHTML = "paper"
    com.innerHTML = computer
    winner('paper',  computer)
})

scissors.addEventListener('click', function () {
    let computer = elements()
    console.log('user: scissor')
    console.log(`computer : ${computer}`);
    user.innerHTML = 'scissor'
    com.innerHTML = computer
    winner('scissor', computer)
})


const winner = (player, computer) => {
    if(player === computer){
        result.textContent = 'Tie'
    }
    else if(player == 'rock'){
        if(computer == 'paper'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;

        }else{
            result.textContent = 'Player Won'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(player == 'scissors'){
        if(computer == 'rock'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
}












