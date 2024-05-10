let computerScore = 0;
let playerScore = 0;

function computerDecision () {
    // rock is 0, paper is 1, scissors is 2
    return (Math.floor(Math.random()*3))      
}

function update () {
    $('#comp-score').text(computerScore);
    $('#player-score').text(playerScore);
    if (playerScore == 5) {
        $('#messages').text("Well Done! You've Won! Click another button to start again!")
    }
    if (computerScore == 5) {
        $('#messages').text("Try again next time! Click another button to start again!")
    }
}

function gameWon () {
    computerScore = 0;
    playerScore = 0;
}

function rps (num) {
    // rock is 0, paper is 1, scissors is 2
    switch (num) {
        case (0): return "Rock!"; break;
        case (1): return "Paper!"; break;
        case (2): return "Scissors!"; break;
    }
}

function play (player) {
    if (computerScore == 5 || playerScore == 5) {
         gameWon()
    }

    let cpu = computerDecision();
    console.log ("You chose: " + rps(player) + " and the CPU chose: " + rps(cpu))
    if (player - cpu == -1 || player - cpu == 2) {
        $('#messages').text("You lose, computer chose " + rps(cpu))
        computerScore++
    } else if (player - cpu == -2 || player - cpu == 1) {
        $('#messages').text("You win, computer chose " + rps(cpu));
        playerScore++;
    } else {
        $('#messages').text("It's a draw! You both chose " + rps(cpu));
    }

    update ();
}