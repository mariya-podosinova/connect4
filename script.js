const player1_btn = document.querySelector(".player1-btn");
const player2_btn = document.querySelector(".player2-btn");

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
function handleClick() {
  player1_btn.classList.toggle("active-btn");
  player2_btn.classList.toggle("active-btn");
}

// Clear down the elements drawn on the board.
function clearBoard() {
  for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
      document.getElementById(
        `row-${rowIndex}-column-${columnIndex}`
      ).innerHTML = "";
    }
  }
}

// Populate the grid with images based on the board state.
function drawBoard(board) {
  clearBoard();
  for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
      if (!board[rowIndex][columnIndex]) {
        continue;
      }
      let currentClass =
        board[rowIndex][columnIndex] === "red" ? "red" : "yellow";
      document
        .getElementById(`row-${rowIndex}-column-${columnIndex}`)
        .classList.add(currentClass);
    }
  }
}
// function isValidRowOrColumn(array) {
//   return Array.isArray(array) && array.length === 6;
// }

// function isValidColumn(columnArray) {
//   return isValidRowOrColumn(columnArray) && columnArray.every(function (item) { return ["nought", "cross", null].includes(item); });
// }

// A grid position was clicked call the game's turn function, redraw and then check for a winner.
function positionClick(rowIndex, columnIndex, event) {
  takeTurn(rowIndex, columnIndex);
  const board = getBoard();

  drawBoard(board);
}
function getBoard() {
  return board;
}

// Bind the click events for the grid.
for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
  for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
    const gridPosition = document.getElementById(
      `row-${rowIndex}-column-${columnIndex}`
    );
    gridPosition.addEventListener(
      "click",
      positionClick.bind(null, rowIndex, columnIndex)
    );
  }
}
