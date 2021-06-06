const winnerName = document.getElementById("winner-name");
const winnerDisplay = document.getElementById("winner-display");

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

  const winner = checkWinner();
  if (winner) {
    if (
      typeof winner !== "string" ||
      !["red", "yellow", "nobody"].includes(winner)
    ) {
      throw (
        "Expecting 'checkWinner' to return null or one of the strings 'noughts', 'crosses' or 'nobody'. Actually received: " +
        winner
      );
    }

    winnerName.innerText = winner;
    winnerDisplay.style.display = "block";
    winnerDisplay.classList.add(winner);
  }
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
// Clear down the elements drawn on the board.
function clearBoard() {
  console.log("clearBoard was called ");
  for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
      let currentClass1 =
        board[rowIndex][columnIndex] === "yellow" ? "yellow" : "red";
      let currentClass2 =
        board[rowIndex][columnIndex] === "red" ? "red" : "yellow";
      document
        .getElementById(`row-${rowIndex}-column-${columnIndex}`)
        .classList.remove(currentClass1);
      document
        .getElementById(`row-${rowIndex}-column-${columnIndex}`)
        .classList.remove(currentClass2);
    }
  }
}
// Populate the grid with images based on the board state.
function drawBoard(board) {
  clearBoard();
  console.log("drawBoard was called ", board);
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

if (typeof exports === "object") {
  console.log("Running in Node");
  // Node. Does not work with strict CommonJS, but only CommonJS-like
  // environments that support module.exports, like Node.
  // eslint-disable-next-line no-undef
  module.exports = {
    positionClick,
    drawBoard,
    clearBoard,
    resetClick,
  };
} else {
  console.log("Running in Browser");
}
