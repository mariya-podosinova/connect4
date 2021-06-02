const player1Btn = document.querySelector(".player1-btn");
const player2Btn = document.querySelector(".player2-btn");
const scoreDisplay = document.getElementById("score-display");
const submitBtn = document.getElementById("submit-btn");

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

// Clear down the elements drawn on the board.
function clearBoard() {
  console.log("clearBoard was called ");
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
  console.log("drawBoard was called ", board);
  clearBoard();
  for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
      if (!board[rowIndex][columnIndex]) {
        continue;
      }

      let currentClass =
        board[rowIndex][columnIndex] === "red" ? "red" : "yellow";
      document
        .getElementById(
          `row-${dropToBottom(rowIndex, columnIndex)}-column-${columnIndex}`
        )
        .classList.add(currentClass);
    }
  }
}

// A grid position was clicked call the game's turn function, redraw and then check for a winner.
function positionClick(rowIndex, columnIndex, event) {
  console.log(
    "positionClick was called  with row: " +
      rowIndex +
      ", column:" +
      columnIndex
  );
  takeTurn(dropToBottom(rowIndex, columnIndex), columnIndex);
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
    gridPosition.addEventListener("click", () => {
      console.log(
        "clicked " + rowIndex,
        columnIndex,
        " dropTobottom " + dropToBottom(rowIndex, columnIndex)
      );
    });
  }
}

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
  scoreDisplay.style.display = "block";
}
//
function dropToBottom(x_pos, y_pos) {
  for (let x = 5; x > x_pos; x--) {
    if (typeof board[x][y_pos] !== "string") {
      return x;
    }
  }
  return x_pos;
}
