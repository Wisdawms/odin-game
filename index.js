function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const choices = ['rock', 'paper', 'scissors']
let playerScore = 0
    , computerScore = 0
    , currentRound = 0;
const MAX_ROUNDS = 5;
const MAX_SCORE = 5;
const playForRounds = true;
let ended = false;

const yesBtn = document.querySelector("#yes");
const noBtn = document.querySelector("#no");
const playAgainDiv = document.querySelector('#play-again-div');

const resultsText = document.querySelector('#results-text');

function getComputerChoice() {
    // randomly return one of the choices "Rock, paper, scissors"
    return getRandomElement(choices)
}

// function getPlayerChoice() {
//     let playerChoice = null;
//     let askPlayer = prompt("Rock[0], Paper[1] or Scissors[2]?: ");
//     if (playerChoice == null) {
//         if (/^\d+$/.test(askPlayer) && askPlayer in ['0', '1', '2']) {
//             playerChoice = choices[parseInt(askPlayer)];
//         }
//         else if (/^[A-Za-z]+$/.test(askPlayer) && choices.includes(askPlayer.toLowerCase())) {
//             playerChoice = askPlayer.toLowerCase();
//         }
//         else {
//             alert('Please enter a valid choice!');
//             getPlayerChoice();
//             return
//         }
//         console.log(`Player's choice: ${playerChoice}`);
//         return playerChoice
//     }
// }

function playRound(playerChoice, computerChoice) {
    let roundMsg = '';
    if (playForRounds) {
        roundMsg = `(Round: ${currentRound})`;
    }
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
            //             alert(`${roundMsg} Tie!

            // Player's score: ${playerScore}
            // Computer's score: ${computerScore}`);

            resultsText.textContent = `${roundMsg} Tie!

Player's score: ${playerScore}
Computer's score: ${computerScore}`;

            break;
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            playerScore++;
            if (playerScore < MAX_SCORE && computerScore < MAX_SCORE || currentRound < MAX_ROUNDS) {
                //                 alert(`${roundMsg} Player wins this round!

                // Player's score: ${playerScore}
                // Computer's score: ${computerScore}`);

                resultsText.textContent = `${roundMsg} Player wins this round!

Player's score: ${playerScore}
Computer's score: ${computerScore}`;
            }
            break;
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            computerScore++;
            if (playerScore < MAX_SCORE && computerScore < MAX_SCORE || currentRound < MAX_ROUNDS) {
                //                 alert(`${roundMsg} Computer wins this round!

                // Player's score: ${playerScore}
                // Computer's score: ${computerScore}`);

                resultsText.textContent = `${roundMsg} Computer wins this round!
                
Player's score: ${playerScore}
Computer's score: ${computerScore}`;
            }
            break;
    }

    if ((!playForRounds && playerScore >= MAX_SCORE) || (playForRounds && playerScore > computerScore && currentRound >= MAX_ROUNDS)) {
        //     alert(`Player wins the game!

        // Player's score: ${playerScore}
        // Computer's score: ${computerScore}`);

        resultsText.textContent =
            `Player wins the game!

Player's score: ${playerScore}
Computer's score: ${computerScore}`;
        ended = true;
    }
    else if ((!playForRounds && computerScore >= MAX_SCORE) || (playForRounds && computerScore > playerScore && currentRound >= MAX_ROUNDS)) {
        //     alert(`Computer wins the game!

        // Player's score: ${playerScore}
        // Computer's score: ${computerScore}`);

        resultsText.textContent = `Computer wins the game!
    
Player's score: ${playerScore}
Computer's score: ${computerScore}`;
        ended = true;
    }
    else if (playForRounds && currentRound >= MAX_ROUNDS && computerScore == playerScore) {
        //     alert(`The game is a TIE!

        // Player's score: ${playerScore}
        // Computer's score: ${computerScore}`);

        resultsText.textContent = `The game is a TIE!

Player's score: ${playerScore}
Computer's score: ${computerScore}`;
        ended = true;
    }

    if (ended) {
        playAgainDiv.style = "display: flex;"
        yesBtn.onclick = () => {
            ended = false;
            currentRound = 1;
            playerScore = 0;
            computerScore = 0;
            resultsText.textContent = 'New game started';
            playAgainDiv.style = "display: none;"
            return
        }

        noBtn.onclick = () => {
            playAgainDiv.style = "display: none;"
            resultsText.textContent = "";
            return
        }
    }
}


const choiceButtons = document.querySelectorAll('.choice-btn');

function playGame() {
    playerScore = 0;
    computerScore = 0;
    currentRound = 1;

    choiceButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (playForRounds) {
                if (currentRound < MAX_ROUNDS + 1) { // if haven't ended
                    playRound(btn.id, getComputerChoice())
                    currentRound++;
                }
            }

            else {
                if (playerScore < MAX_SCORE + 1 && computerScore < MAX_SCORE + 1) { // if haven't won yet
                    playRound(btn.id, getComputerChoice())
                    currentRound++;
                }

            }

        })
    });
}

playGame();




