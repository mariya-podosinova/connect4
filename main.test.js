const academyModule = require("./main");

//Test pure functions
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
