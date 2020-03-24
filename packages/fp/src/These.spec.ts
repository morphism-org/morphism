import { Option, These } from ".";

describe("These", () => {
  describe("fromNullables", () => {
    test.each`
      a            | b            | expected
      ${null}      | ${undefined} | ${Option.none}
      ${undefined} | ${null}      | ${Option.none}
      ${1}         | ${undefined} | ${Option.some(These.left(1))}
      ${null}      | ${"a"}       | ${Option.some(These.right("a"))}
      ${true}      | ${false}     | ${Option.some(These.both(true, false))}
    `("fromNullables($a, $b) === $expected", ({ a, b, expected }) =>
      expect(These.fromNullables(a, b)).toEqual(expected)
    );
  });
});
