import { Either, Task, TaskEither } from ".";
import { pipe } from "./index";

describe("TaskEither", () => {
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
});
