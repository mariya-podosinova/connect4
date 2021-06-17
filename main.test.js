const academyModule = require("./main");

//Test pure functions
describe("when we calling the board it returns the board", () => {
  test("it returns empty board", () => {
    const actual = academyModule.getBoard();
    const expected = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];
    expect(actual).toEqual(expected);
  });
});

//Test non-pure functions

describe("when we calling the horizontalChecking function", () => {
  test("it returns null if its empty", () => {
    const actual = academyModule.horizontalChecking();
    const expected = null;
    expect(actual).toEqual(expected);
  });

  test("it returns null if its two tokens on the field", () => {
    //Arrange
    academyModule.takeTurn(0, 0);
    academyModule.takeTurn(0, 0);
    //Act
    let actual = academyModule.horizontalChecking();
    //Assert
    const expected = null;
    expect(actual).toEqual(expected);
  });
});
