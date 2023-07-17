const getInLine = require("./getInLine");

describe("getInLine", () => {
  test("when 0 is the only value in the queue, the answer is 1", () => {
    expect(getInLine([0])).toEqual(1);
  });
});
