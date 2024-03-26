function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const choices = ['rock', 'paper', 'scissors']
let playerScore = 0
    , computerScore = 0;

function getComputerChoice() {
    // randomly return one of the choices "Rock, paper, scissors"
    return getRandomElement(choices)
}

function getPlayerChoice() {
    let playerChoice = null;
    let askPlayer = prompt("Rock[0], Paper[1] or Scissors[2]?: ");
    if (playerChoice == null) {
        if (/^\d+$/.test(askPlayer) && askPlayer in ['0', '1', '2']) {
            playerChoice = choices[parseInt(askPlayer)];
        }
        else if (/^[A-Za-z]+$/.test(askPlayer) && choices.includes(askPlayer.toLowerCase())) {
            playerChoice = askPlayer.toLowerCase();
        }
        else {
            alert('Please enter a valid choice!');
            getPlayerChoice();
            return
        }
        console.log(`Player's choice: ${playerChoice}`);
        return playerChoice
    }
}

function playRound(playerChoice, computerChoice) {
    if (choices.includes(playerChoice)) {
        console.log(`Computer's choice: ${computerChoice}`);
    }

    // Combine choices into a single string for comparison
    const combinedChoice = computerChoice + playerChoice;

    // Use a switch statement to handle the different cases
    switch (combinedChoice) {
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            alert(`Tie!

Player's score: ${playerScore}
Computer's score: ${computerScore}`);
            break;
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            playerScore++;
            if (playerScore < 5 && computerScore < 5) {
                alert(`Player wins this round!

Player's score: ${playerScore}
Computer's score: ${computerScore}`);
            }
            break;
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            computerScore++;
            if (playerScore < 5 && computerScore < 5) {
                alert(`Computer wins this round!
                
Player's score: ${playerScore}
Computer's score: ${computerScore}`);
            }
            break;
    }
}


function playGame() {
    playerScore = 0;
    computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        playRound(getPlayerChoice(), getComputerChoice())
    }

    if (playerScore >= 5) {
        alert(`Player wins the game!

Player's score: ${playerScore}
Computer's score: ${computerScore}`);
    }
    else if (computerScore >= 5) {
        alert(`Computer wins the game!

Player's score: ${playerScore}
Computer's score: ${computerScore}`);
    }

    let again = null;

    while (!['yes', 'no'].includes(again)) {
        again = prompt('Play again? (yes/no): ').toLowerCase();
        switch (again) {
            case 'yes':
            case 'yeah':
            case 'yeah':
            case 'ye':
            case 'yay':
                playGame();
                break;
            case 'no':
            case 'nah':
            case 'nay':
            case 'naah':
                return
        }
    }
}

playGame();