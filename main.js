const player1Btn = document.querySelector(".player1-btn");
const player2Btn = document.querySelector(".player2-btn");
const scoreDisplay = document.getElementById("score-display");
const submitBtn = document.getElementById("submit-btn");
const players = document.getElementById("add-players");

let board = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];
let first = true;
let gameOn = true;
let winner = null;

function takeTurn(row, column) {
  console.log("takeTurn was called with row: " + row + ", column:" + column);

  if (!gameOn) return null;
  if (board[row][column] !== null) return board;

  if (first) board[row][column] = "red";
  else board[row][column] = "yellow";

  first = !first;
  return board;
}
// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
  // const boardToArray = board.flat();

  console.log("checkWinner was called");
  // const numTurns = boardToArray.filter((el) => el !== null).length;
  // if (numTurns > 4) {
  horizontalChecking();
  // verticalChecking();
  // diagonalChecking();
  console.log(winner);
  // }
  // if (numTurns === 9) return "nobody";
  if (winner) {
    gameOn = false;
    return winner;
  } else {
    return null;
  }
}

// Set the game state back to its original state to play another game.
function resetGame() {
  console.log("resetGame was called");
  gameOn = true;
  winner = null;
  board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ];
  drawBoard(board);
}
// // The reset button was clicked, call the game's reset function then reset the DOM.
function resetClick(event) {
  resetGame();
  clearBoard();
  const winnerName = document.getElementById("winner-name");
  winnerName.innerText = "";
  const winnerDisplay = document.getElementById("winner-display");
  winnerDisplay.style.display = "None";
}
// Bind the click event for the reset button.
const resetButton = document.querySelector(".reset-btn");
resetButton.addEventListener("click", resetClick);
//Extras
function handleClick() {
  player1Btn.classList.toggle("active-btn");
  player2Btn.classList.toggle("active-btn");
}

function addPlayers(ev) {
  ev.preventDefault();
  const player1Name = document.getElementById("player1").value;
  const player2Name = document.getElementById("player2").value;
  player1Btn.innerText = player1Name || "Connect";
  player2Btn.innerText = player2Name || "4";
  submitBtn.style.display = "none";
  players.style.display = "none";
  scoreDisplay.style.display = "block";
}
//Helper functions
function dropToBottom(row_pos, column_pos) {
  for (let row = 5; row > row_pos; row--) {
    if (typeof board[row][column_pos] !== "string") {
      return row;
    }
  }
  return row_pos;
}
const checkForWinner = (red, yellow) => {
  if (red.length === 4) {
    return "red";
  }
  if (yellow.length === 4) {
    return "yellow";
  }
  return null;
};
//Horizontal
const horizontalChecking = () => {
  board.forEach((row) => {
    const red = row.filter((col) => col === "red");
    const yellow = row.filter((col) => col === "yellow");

    if (checkForWinner(red, yellow)) {
      winner = checkForWinner(red, yellow);
    }
  });
  return winner;
};
function getBoard() {
  console.log("getBoard was called", board);
  return board;
}

if (typeof exports === "object") {
  console.log("Running in Node");
  // Node. Does not work with strict CommonJS, but only CommonJS-like
  // environments that support module.exports, like Node.
  // eslint-disable-next-line no-undef
  module.exports = {
    checkWinner,
    resetGame,
    takeTurn,
    getBoard,
  };
} else {
  console.log("Running in Browser");
}
