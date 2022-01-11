let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// generateTarget function called at the start of each new round in order to generate a new secret target number
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}


//getAbsoluteDistance function to determine the absolute distance between 2 given numbers
const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
}


//compareGuesses function to be called each round to determine which guess is closest to the target number. Accepts 3 parameters, human guess, computer guess, and target number.
const compareGuesses = (hGuess, cGuess, target) => {
    //checks for valid human input
    if (hGuess <= 9 && hGuess >= 0){
        //compare distances to determine a winner. Return winner.
        if (getAbsoluteDistance(hGuess, target) <= getAbsoluteDistance(cGuess, target)) {
            console.log(true);
            return true;
        } else {
            console.log(false);
            return false;
        }
    } else {
        alert('Input out of range');
        // return;
    }
} 


// updateScore will increase each winner's score each round
const updateScore = winner => {
    switch (winner) {
        case 'human':
            humanScore += 1;
            break;
        case 'computer':
            computerScore += 1;
            break;
        default:
            console.log('Error in updateScore() switch');
            break;
    }
}


// advanceRound function will update round number each round
const advanceRound = () => {
    currentRoundNumber += 1;
}

