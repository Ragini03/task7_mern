const binarySearch = require("./binarySearch");

test("Returns 3 for number 3", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
});
test("Returns 5 for number 5", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
});
test("Returns -1 for number 6", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
});
