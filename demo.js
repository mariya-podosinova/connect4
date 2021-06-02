let board = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, "red", "red", "red", null, null, null],
  ["red", "red", "red", "red", null, null, null],
];

for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
  for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
    if (board[rowIndex][columnIndex]) {
      console.log(board[rowIndex][columnIndex]);
    }
  }
}
