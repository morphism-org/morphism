import * as List from "./List";

describe("List", () => {
  const booleans: readonly boolean[] = [true, false];
  const numbers: readonly number[] = [1, 2, 3];
  const strings: readonly string[] = ["a", "b", "c"];
  const objects: readonly object[] = [{ a: 1 }, { a: "2" }, { b: true }];
  const mixed: readonly (boolean | number | string | object)[] = [
    ...booleans,
    ...numbers,
    ...strings,
    ...objects,
  ];

  describe("nonNullables", () => {
    test.each`
      a                                      | expected
      ${[null, ...booleans, undefined]}      | ${booleans}
      ${[null, null, undefined, ...numbers]} | ${numbers}
      ${[undefined, ...strings, null, null]} | ${strings}
      ${[undefined, ...objects, null]}       | ${objects}
      ${[null, undefined, ...mixed, null]}   | ${mixed}
    `("nonNullables($a) === $expected", ({ a, expected }) =>
      expect(List.nonNullables(a)).toEqual(expected)
    );
  });
});
