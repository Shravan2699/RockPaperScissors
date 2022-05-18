// console.log("Hello World");

const computerMove = ['Rock','Paper','Scissors'];

function computerPlay() {
    return computerMove[Math.floor(Math.random() * computerMove.length)];
}

let score = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock'){
        if (computerSelection === 'Rock'){
            return `It was a tie.`
        } else if (computerSelection === 'Paper'){
            return `Computer Wins,as Paper beats Rock`
        } else if (computerSelection === 'Scissors'){
            score += 1;
            return `Player wins,as Rock beats Scissors`
        }
    } else if (playerSelection === 'Paper'){
        if (computerSelection === 'Rock'){
            score += 1; 
            return `Player wins,as Paper beats Rock.`
        } else if (computerSelection === 'Paper'){
            return `It was a tie`
        } else if (computerSelection === 'Scissors'){
            return `Computer wins,as Scissors beat Paper`
        }
    }  else if (playerSelection === 'Scissors'){
        if (computerSelection === 'Rock'){
            return `Computer wins,as Rock beats Scissors.`
        } else if (computerSelection === 'Paper'){
            score += 1;
            return `Player wins,as Scissors beat Paper`
        } else if (computerSelection === 'Scissors'){
            return `It was a tie`
        }
    } else {
        return `Incorrect Input.Please input Rock or Paper or Scissors`
    } 
}  
  



function game() {
    for (let i = 0; i <5;i++){
        playerSelection = prompt('Please Select Rock,Paper and Scissors: ').toLowerCase();
        const firstLetter = playerSelection[0].toUpperCase();
        const str = playerSelection.substring(1);
        const finalPlayerSelection = firstLetter + str;

        console.log(`User Selected: ${finalPlayerSelection}`);

  
        const computerSelection = computerPlay();
        console.log(`Computer selected: ${computerSelection}`);
        console.log(playRound(finalPlayerSelection, computerSelection))
        console.log(`Current Score: ${score}`);
        console.log(".........................");
    }
    if (score >= 3) {
        console.log(`GAME OVER.You Win.The User has won ${score} out of 5 rounds`)
    } else {
        console.log(`GAME OVER.You Lose.The Computer has won ${5 - score}out of 5 rounds`)
    }  
}

console.log('Hello World!')