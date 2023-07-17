const getInLine = require("./getInLine");

describe("getInLine", () => {
  test("when you are the only person in the queue, wait time is 1", () => {
    expect(getInLine([0])).toEqual(1);
  });

  test("when queue has only unknown guests, your wait time is index + 1", () => {
    expect(getInLine([4, 5, 10, 0, 5, 7])).toEqual(4);
  });

  test("2s are bumped to the front of the queue before your wait time is calculated", () => {
    expect(getInLine([4, 0, 2])).toEqual(3);
  });
});
