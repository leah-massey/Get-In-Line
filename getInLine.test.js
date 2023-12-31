const getInLine = require("./getInLine");

describe("getInLine", () => {
  test("when you are the only person in the queue, wait time is 1", () => {
    expect(getInLine([0])).toEqual(1);
  });

  test("when queue has only unknown guests, your wait time is index + 1", () => {
    expect(getInLine([4, 5, 10, 0, 5, 7])).toEqual(4);
  });

  test("2s are bumped to the front of the queue before your wait time is calculated", () => {
    expect(getInLine([4, 0, 2, 2])).toEqual(4);
  });

  test("a 1 is not counted in the queue and its presence induces an array swap before wait time is calculated", () => {
    expect(getInLine([4, 0, 1])).toEqual(1);
  });

  test("multiple 1s in the queue induce multiple swaps in the queue order", () => {
    expect(getInLine([4, 1, 0, 1])).toEqual(2);
  });

  test("2s are not immune to swapping", () => {
    expect(getInLine([4, 1, 2, 2, 0])).toEqual(1);
  });
});
