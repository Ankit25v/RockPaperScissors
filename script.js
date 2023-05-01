// Get GameElements choices-Roc,Paper,Scissor
const rockHand = document.querySelector('.rpsButton[value="Rock"]');
const paperHand = document.querySelector('.rpsButton[value="Paper"]');
const scissorHand = document.querySelector('.rpsButton[value="Scissors"]');
const gameBtns = document.querySelectorAll('.rpsButton');
const playerScore = document.getElementById('player-score');
const hands = document.getElementById('hands');
const result = document.getElementById('result');

// Create object showcasing game elements in array of objects with values and symbols
const gameElements = [
  { value: rockHand.value, symbol: rockHand.innerText },
  { value: paperHand.value, symbol: paperHand.innerText },
  { value: scissorHand.value, symbol: scissorHand.innerText }
];
let handSymbols = gameElements.map(element => element.symbol).join(' ');

// Define set score & hand methods to set the value in the web page
const setScore = (pScore, cScore) => {
  playerScore.innerText = `Player ${pScore} : ${cScore} Computer`;
};

const setHandSymbols = (pSymbol, cSymbol) => {
  hands.innerText = `${pSymbol} : ${cSymbol}`;
};

// Set scores to 0 for player & computer & display initial score on webpage
let playerScoreValue = 0;
let computerScoreValue = 0;
setScore(playerScoreValue, computerScoreValue);

// Define start game function
const startGame = () => {
  // Set event listeners on the game buttons
  gameBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      evaluateResult({ value: btn.value, symbol: btn.innerText });
    });
  });
};

// Evaluate result function definition
const evaluateResult = (playerChoice) => {
  // Define computer choice function, which randomly chooses any gameElement from the gameElements array
  let computerChoice =
    gameElements[Math.floor(Math.random() * gameElements.length)];

  console.log(playerChoice.value, computerChoice.value);
  if (playerChoice.value == computerChoice.value) {
    // If it's a draw
    result.innerText = "It's a Draw!!";
    setHandSymbols(playerChoice.symbol, computerChoice.symbol);
  } else if (
    (playerChoice.value == 'Rock' && computerChoice.value == 'Scissors') ||
    (playerChoice.value == 'Scissors' && computerChoice.value == 'Paper') ||
    (playerChoice.value == 'Paper' && computerChoice.value == 'Rock')
  ) {
    // If player wins
    result.innerText = `Player Wins!! ${playerChoice.value} beats ${computerChoice.value}`;
    playerScoreValue += 1;
    setScore(playerScoreValue, computerScoreValue);
    setHandSymbols(playerChoice.symbol, computerChoice.symbol);
  } else {
    // If computer wins
    result.innerText = `Computer Wins!! ${computerChoice.value} beats ${playerChoice.value}`;
    computerScoreValue += 1;
    setScore(playerScoreValue, computerScoreValue);
    setHandSymbols(playerChoice.symbol, computerChoice.symbol);
  }
};

startGame();
