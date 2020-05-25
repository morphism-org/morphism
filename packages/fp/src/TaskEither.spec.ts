import { Either, Task, TaskEither } from ".";
import { pipe } from "./index";

describe("TaskEither", () => {
  const throwError = (): never => {
    throw Error("Oof!"); // eslint-disable-line functional/no-throw-statement
  };

  describe("fromUnsafe", () => {
    test("`Left` if `Promise` rejects", async () => {
      const result = await TaskEither.fromUnsafe(() => Promise.reject())();
      expect(Either.isLeft(result)).toEqual(true);
    });

    test("`Right` if `Promise` resolves", async () => {
      const value = "resolves";
      const result = await TaskEither.fromUnsafe(() =>
        Promise.resolve(value)
      )();

      expect(Either.isRight(result)).toEqual(true);
      expect(result).toEqual(Either.right(value));
    });
  });

  describe("do-notation", () => {
    test.each`
      one                   | two                   | expected
      ${() => 1}            | ${() => 2}            | ${3}
      ${() => throwError()} | ${() => 2}            | ${-1}
      ${() => 1}            | ${() => throwError()} | ${-1}
      ${() => throwError()} | ${() => throwError()} | ${-1}
    `("`one` + `two` = `$expected`", ({ one, two, expected }) => {
      const doNotation = TaskEither.do
        .bind("one", TaskEither.fromUnsafe<number>(one))
        .bind("two", TaskEither.fromUnsafe<number>(two))
        .return(({ one, two }) => one + two);

      const result = pipe(
        doNotation,
        TaskEither.getOrElse(() => Task.of(-1))
      );

      expect(result).toEqual(expected);
    });
  });
});
