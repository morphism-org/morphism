import { Either } from "../index";

describe("Either", () => {
  const throwError = (): never => {
    throw Error("Oof!"); // eslint-disable-line functional/no-throw-statement
  };

  describe("fromUnsafe", () => {
    test.each`
      a                     | expected
      ${() => 1}            | ${Either.right(1)}
      ${() => "a"}          | ${Either.right("a")}
      ${() => true}         | ${Either.right(true)}
      ${() => null}         | ${Either.right(null)}
      ${() => [3]}          | ${Either.right([3])}
      ${() => throwError()} | ${Either.left(Error("Oof!"))}
    `("returns `$expected`", ({ a, expected }) =>
      expect(Either.fromUnsafe(a)).toEqual(expected)
    );
  });
});
