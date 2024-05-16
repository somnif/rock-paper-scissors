let computerScore = 0;
let playerScore = 0;

const compScoreText = document.querySelector("#comp-score")
const playerScoreText = document.querySelector("#player-score")
const messages = document.querySelector("#messages")
const buttons = document.querySelectorAll("input")

function computerDecision () {
    // rock is 0, paper is 1, scissors is 2
    return (Math.floor(Math.random()*3))      
}

function update () {
    compScoreText.innerText = computerScore;
    playerScoreText.innerText = playerScore;
    if (playerScore == 5) {
        messages.innerText = "Well Done! You've Won! Click another button to start again!"
    }
    if (computerScore == 5) {
        messages.innerText = "Try again next time! Click another button to start again!"
    }
}

function gameReset () {
    computerScore = 0;
    playerScore = 0;
}

function rps (num) {
    // rock is 0, paper is 1, scissors is 2
    switch (num) {
        case (0): return "Rock"; break;
        case (1): return "Paper"; break;
        case (2): return "Scissors"; break;
        case ("rock"): return 0; break;
        case ("paper"): return 1; break;
        case ("scissors"): return 2; break;
    }
}

function play(choice) {
    if (computerScore == 5 || playerScore == 5) {
        gameReset()
   }
    let player = rps(choice)
    let cpu = computerDecision();
    if (player - cpu == -1 || player - cpu == 2) {
        messages.innerText = "You lose, computer chose " + rps(cpu) + "!";
        computerScore++
    } else if (player - cpu == -2 || player - cpu == 1) {
        messages.innerText = "You win, computer chose " + rps(cpu) + "!";
        playerScore++;
    } else {
        messages.innerText = "It's a draw! You both chose " + rps(cpu) + "!";
    }

    update();
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.id)
        play(e.target.id)
    })
})