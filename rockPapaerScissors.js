// console.log("Hello World");

const computerMove = ['Rock','Paper','Scissors'];
const computerImg = document.createElement('img');
const computerDiv = document.querySelector('.computerSection')
let comp;
const finalScore = document.createElement('div');

function computerPlay() {
    comp = computerMove[Math.floor(Math.random() * computerMove.length)];
    if (comp === 'Rock'){
        computerImg.src = './images/rock.png';
    } else if (comp === 'Paper'){
        computerImg.src = './images/paper.png';
    } else if (comp === 'Scissors'){
        computerImg.src = './images/scissors.png'
    }
    console.dir(computerImg)
    computerImg.style.width = '300px';
    computerImg.style.height = '300px';
    computerImg.style.border = '5px solid black';
    computerImg.style.borderRadius = '10%';
    return comp;
}




let round = 0;
let score = 0;
let compScore = 0;



function playRound(userSelected, comp) {
    if (userSelected === 'Rock'){
        round +=1;
        if (comp === 'Rock'){
            return `It was a tie.`
        } else if (comp === 'Paper'){
            compScore += 1
            return `Computer Wins,as Paper beats Rock`  
        } else if (comp === 'Scissors'){
            score += 1;
            return `Player wins,as Rock beats Scissors`
        }
    } else if (userSelected === 'Paper'){
        round +=1;
        if (comp === 'Rock'){
            score += 1; 
            return `Player wins,as Paper beats Rock.`
        } else if (comp === 'Paper'){
            return `It was a tie`
        } else if (comp === 'Scissors'){
            compScore += 1
            return `Computer wins,as Scissors beat Paper`
        }
    }  else if (userSelected === 'Scissors'){
        round +=1;
        if (comp === 'Rock'){
            compScore += 1
            return `Computer wins,as Rock beats Scissors.`
        } else if (comp === 'Paper'){
            score += 1;
            return `Player wins,as Scissors beat Paper`
        } else if (comp === 'Scissors'){
            return `It was a tie`
        }
    } else {
        return `Incorrect Input.Please input Rock or Paper or Scissors`
    } 
}  
  
const userMove = document.querySelector('.userMove');
const result = document.createElement('div');
const buttons = document.querySelectorAll('.btn');
const playerSection = document.querySelector('.playerSection');
const userImg = document.createElement('img');
const scoreDiv = document.createElement('div');
const compScoreDiv = document.createElement('div');
const rounds = document.createElement('div');

let userSelected;
let middleScreen = document.createElement('div')


for (button of buttons){
    button.addEventListener('click',(e)=>{
        userSelected = e.target.innerText;
        console.log(userSelected);
        if (userSelected === 'Rock'){
            userImg.src = './images/rock.png';
        } else if (userSelected === 'Paper'){
            userImg.src = './images/paper.png';
        } else if (userSelected === 'Scissors'){
            userImg.src = './images/scissors.png'
        }
        console.dir(userImg)
        userImg.style.width = '300px';
        userImg.style.height = '300px';
        userImg.style.border = '5px solid black';
        userImg.style.borderRadius = '10%';
        // playerSection.appendChild(userImg);
        computerPlay();
        // console.log(playRound(userSelected,comp));
        middleScreen.innerText = `${playRound(userSelected,comp)}`;
        middleScreen.style.color = 'red';
        middleScreen.style.fontSize = '30px';
        middleScreen.style.marginBottom = '6rem';
        rounds.innerText = `${round}`;
        userMove.prepend(middleScreen);
        userMove.append(rounds);
        scoreDiv.style.fontSize = '60px';
        scoreDiv.innerText = `${score}`;
        playerSection.appendChild(scoreDiv);
        playerSection.appendChild(userImg);

        compScoreDiv.innerText = `${compScore}`;
        compScoreDiv.style.fontSize = '60px'
        computerDiv.appendChild(compScoreDiv);
        computerDiv.appendChild(computerImg);

        
        console.log(compScore);
        console.log(score);
        if (round === 5){
            if (score > compScore) {
                finalScore.innerText = `\n\nGAME OVER.You Win.The User has won ${score} out of 5 rounds`
                // console.log(`GAME OVER.You Win.The User has won ${score} out of 5 rounds`);
                middleScreen.appendChild(finalScore);
                for (button of buttons){
                    button.disabled = 'true';
                }  
            } else if (compScore > score){
                // console.log(`GAME OVER.You Lose.The Computer has won ${5 - score} out of 5 rounds`);
                finalScore.innerText = `\n\nGAME OVER.You Lose.The Computer has won ${compScore} out of 5 rounds`
                middleScreen.appendChild(finalScore);
                for (button of buttons){
                    button.disabled = 'true';
                }
                }else {
                    finalScore.innerText = `\n\nGame OVER.The user and computer both have same points\nIt was a tie.`
                }
                middleScreen.appendChild(finalScore);
                for (button of buttons){
                    button.disabled = 'true';
                }
            }
        }
    )
}


function game(computerPlay,userSelected) {
    //To-do
    //The Game only has 5 rounds.It ends when the user has selected 5 times and comes up with a winner.
  



    
}