import { Either, pipe } from ".";

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

  describe("do-notation", () => {
    test.each`
      one                   | two                   | expected
      ${() => 1}            | ${() => 2}            | ${3}
      ${() => throwError()} | ${() => 2}            | ${-1}
      ${() => 1}            | ${() => throwError()} | ${-1}
      ${() => throwError()} | ${() => throwError()} | ${-1}
    `("`one` + `two` = `$expected`", ({ one, two, expected }) => {
      const doNotation = Either.do
        .bind("one", Either.fromUnsafe<number>(one))
        .bind("two", Either.fromUnsafe<number>(two))
        .return(({ one, two }) => one + two);

      const result = pipe(
        doNotation,
        Either.getOrElse(() => -1)
      );

      expect(result).toEqual(expected);
    });
  });
});
