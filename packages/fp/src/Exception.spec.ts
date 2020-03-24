import { Exception } from ".";

describe("Exception", () => {
  describe("fromUnknown", () => {
    test.each`
      a
      ${true}
      ${1}
      ${"a"}
      ${null}
      ${undefined}
      ${Error("Unchanged")}
    `("returns `$expected`", ({ a }) =>
      a instanceof Error
        ? expect(Exception.fromUnknown(a)).toEqual(a)
        : expect(Exception.fromUnknown(a)).toBeInstanceOf(Error)
    );
  });
});
