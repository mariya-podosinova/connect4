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
  // horizontalChecking();
  // verticalChecking();
  diagonalChecking();
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
  winnerDisplay.classList.remove("red");
  winnerDisplay.classList.remove("yellow");
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
  board.forEach((rowArr) => {
    const red = rowArr.filter((row) => row === "red");
    const yellow = rowArr.filter((row) => row === "yellow");

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
//Vertical
const verticalChecking = () => {
  board.forEach((row, i) => {
    const columnArr = [
      board[0][i],
      board[1][i],
      board[2][i],
      board[3][i],
      board[4][i],
      board[5][i],
    ];
    const red = columnArr.filter((col) => col === "red");
    const yellow = columnArr.filter((col) => col === "yellow");

    if (checkForWinner(red, yellow)) {
      winner = checkForWinner(red, yellow);
    }
  });
  return winner;
};
//Diagonal
const diagonalChecking = () => {
  board.forEach((row, i) => {
    if (i !== 1 && i !== 2 && i !== 3 && i !== 4) {
      let j = 5 - i;

      const diagonalArr = [
        board[5][j],
        board[4][Math.abs(i - 4)],
        board[3][Math.abs(i - 3)],
        board[2][Math.abs(i - 2)],
        board[1][Math.abs(i - 1)],
        board[0][5 - j],
      ];
      console.log(diagonalArr);
      let red = diagonalArr.filter((col) => col === "red");
      let yellow = diagonalArr.filter((col) => col === "yellow");

      if (checkForWinner(red, yellow)) {
        winner = checkForWinner(red, yellow);
      }
    }
  });
  board.forEach((row, i) => {
    if (i !== 1 && i !== 2 && i !== 3 && i !== 4) {
      let j = 6 - i;

      const diagonalArr = [
        board[5][j],
        board[4][1 + Math.abs(i - 4)],
        board[3][1 + Math.abs(i - 3)],
        board[2][1 + Math.abs(i - 2)],
        board[1][1 + Math.abs(i - 1)],
        board[0][7 - j],
      ];
      console.log(diagonalArr);
      let red = diagonalArr.filter((col) => col === "red");
      let yellow = diagonalArr.filter((col) => col === "yellow");

      if (checkForWinner(red, yellow)) {
        winner = checkForWinner(red, yellow);
      }
    }
  });

  let diagonalArr = [board[5][3], board[4][2], board[3][1], board[2][0]];
  console.log(diagonalArr);
  let red = diagonalArr.filter((col) => col === "red");
  let yellow = diagonalArr.filter((col) => col === "yellow");

  if (checkForWinner(red, yellow)) {
    winner = checkForWinner(red, yellow);
  }
  diagonalArr = [board[5][3], board[4][4], board[3][5], board[2][6]];
  console.log(diagonalArr);
  red = diagonalArr.filter((col) => col === "red");
  yellow = diagonalArr.filter((col) => col === "yellow");

  if (checkForWinner(red, yellow)) {
    winner = checkForWinner(red, yellow);
  }

  return winner;
};
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
