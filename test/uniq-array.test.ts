import uniqArray from "../src/uniq-array";

test("returns an empty array for empty array", () => {
  expect(uniqArray([])).toStrictEqual([]);
});

test("returns the same array if it contains only one element", () => {
  expect(uniqArray([1])).toStrictEqual([1]);
});

test("returns the an array filtered with uniq items based on a property", () => {
  expect(
    uniqArray(
      [{ letter: "alpha" }, { letter: "beta" }, { letter: "alpha" }],
      "letter"
    )
  ).toStrictEqual([{ letter: "alpha" }, { letter: "beta" }]);
});
