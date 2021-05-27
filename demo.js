let board = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, "red", "red", "red", null, null, null],
  ["red", "red", "red", "red", null, null, null],
];

for (let i in board[i][0]) {
  let allFirst = [];
  if (board[i][0] !== null) {
    allFirst.push(board[i][0]);
  }
  console.log(board[i][0]);
  // console.log(allFirst)
}
// let allFirst = []
// let lastNullInColumn
// console.log(lastNullInColumn)
