// Imports
import 'bootstrap';
import '../scss/main.scss';

import {elements} from './views/base';
import {initializeValues} from './models/Init';
import * as initView from './views/initView';
import * as roll from './models/Roll';
import * as rollView from './views/rollView';
import * as nextPlayer from './models/NextPlayer';
import * as nextPlayerView from './views/nextPlayerView';

// import images to ./dist
function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../img/', true, /\.(png|jpe?g|svg)$/));

// Toggle classes
elements.rulesIcon.addEventListener('click', () => {
    elements.rulesIcon.classList.toggle('open');
    elements.rules.classList.toggle('open');
    elements.bodyNotRules.style.filter = elements.bodyNotRules.style.filter == 'blur(5px) brightness(30%)' ? '' : 'blur(5px) brightness(30%)';
});

let state, scoreToReach;

const init = () => {
    // Set active player class on the first player
    nextPlayerView.changePlayerPanel(elements.playerPanels, elements.playerPanels[0]);

    // Reset app panel
    nextPlayerView.changeAppPanel(elements.appPanel, 0);

    // Reset Player Headings
    elements.playerHeadings.forEach((el, i) => {
        el.innerHTML = `player ${i+1}`;
    })
    
    // Define score to reach
    scoreToReach = 20;
    
    // Display default dices
    initView.resetDices(elements.dices);
    
    // Get init values
    state = initializeValues();
    
    // Display init values
    initView.displayValues(elements.scores, state);
    
    // Hide the unnecessary buttons
    initView.hideElement(elements.holdBtn);
    initView.hideElement(elements.newGameBtn);
}

/**********************************
 * INITIALIZE THE APP
 **********************************/
init();

/**********************************
 * NEXT PLAYER FUNCTION
 **********************************/
const next = () => {
    // Steps
    // Remove active player class from current player
    nextPlayerView.changePlayerPanel(elements.playerPanels,elements.playerPanels[state.activePlayer]);
    // Change the state of active player
    state.activePlayer = nextPlayer.changeActivePlayer(state.activePlayer);
    // Add active player class to the new active player
    nextPlayerView.changePlayerPanel(elements.playerPanels, elements.playerPanels[state.activePlayer]);
    // Add active class to the app panel
    nextPlayerView.changeAppPanel(elements.appPanel, state.activePlayer);
    // Reset current score values of both player
    state.currentScore0 = nextPlayer.resetCurrentPoints(state.currentScore0);
    state.currentScore1 = nextPlayer.resetCurrentPoints(state.currentScore1);
}

/**********************************
 * ROLL THE DICE
 **********************************/
elements.dices.forEach(dice => {
    dice.addEventListener('click', () => {
        if (state.gamePlaying == true) {
            // Make the hidden buttons visible
            initView.showElement(elements.holdBtn);
            initView.showElement(elements.newGameBtn);
        
            // Generate random dice numbers each time
            let [randNum1, randNum2] = roll.generateNums();
        
            // Display the generated dices
            rollView.displayDice(randNum1, elements.dice1);
            rollView.displayDice(randNum2, elements.dice2);
        
            // Calculate the rolled score and update the state
            state.dicePoints = roll.calculateDicePoints(randNum1, randNum2);
        
            // Add rolled num to the current score
            if (state.activePlayer == 0) {
                state.currentScore0 += state.dicePoints;
            } else if (state.activePlayer == 1) {
                state.currentScore1 += state.dicePoints;
            }
    
            // Add RULES to change the ACTIVE PLAYER
            if (randNum1 == 1 || randNum2 == 1) {
                next();
            }
    
            // Display the scores
            initView.displayValues(elements.scores, state);
        }
    });    
});

/**********************************
 * BUTTONS
 **********************************/
// New Game
elements.newGameBtn.addEventListener('click', () => {
    init();
});

// Hold
elements.holdBtn.addEventListener('click', () => {
    if (state.gamePlaying == true) {
        // Add rolled num to the current score
        if (state.activePlayer == 0) {
            state.totalScore0 += state.currentScore0;
        } else if (state.activePlayer == 1) {
            state.totalScore1 += state.currentScore1;
        }
    
        let activeTotal = state.activePlayer == 0 ? state.totalScore0 : state.totalScore1;
    
        // Check if the active player's total reached the Score-To-Reach value
        if (roll.checkWinner(activeTotal, scoreToReach) == true) {
            state.gamePlaying = false;

        // Remove active player class from current player
        nextPlayerView.changePlayerPanel(elements.playerPanels, elements.playerPanels[state.activePlayer]);
        
        elements.playerPanels[state.activePlayer].firstElementChild.innerHTML = 'WINNER!!!';
        
        } else {
            next();
        }
    
        // Display default dices
        initView.resetDices(elements.dices);
    
        // Display the scores
        initView.displayValues(elements.scores, state);
    }
});