import { Either, List, Option, IO } from ".";

describe("IO", () => {
  describe("nullable", () => {
    test.each`
      a             | name         | lefts          | rights
      ${IO.boolean} | ${"boolean"} | ${[1, "a"]}    | ${[true, false]}
      ${IO.number}  | ${"number"}  | ${["a", true]} | ${[1, -50]}
      ${IO.string}  | ${"string"}  | ${[1, true]}   | ${["a", ""]}
    `("nullable($name)", ({ a, lefts, rights }) => {
      const decodeValues = List.map(IO.decode(IO.nullable(a)));
      const rightsWithMaybes: ReadonlyArray<Option.Nullable<unknown>> = [
        ...rights,
        null,
        undefined
      ];

      expect(List.rights(decodeValues(lefts)).length).toEqual(0);
      expect(List.lefts(decodeValues(rightsWithMaybes)).length).toEqual(0);
    });
  });

  describe("fromPredicate", () => {
    test.each`
      name          | predicate                                               | left    | right
      ${"strings"}  | ${(a: unknown): a is string => typeof a === "string"}   | ${1}    | ${"a"}
      ${"numbers"}  | ${(a: unknown): a is number => typeof a === "number"}   | ${"b"}  | ${2}
      ${"booleans"} | ${(a: unknown): a is boolean => typeof a === "boolean"} | ${null} | ${true}
    `("`fromPredicate` for $name", ({ name, predicate, left, right }) => {
      const decode = IO.decode(IO.fromPredicate(name, predicate));
      expect(Either.isLeft(decode(left))).toEqual(true);
      expect(Either.isRight(decode(right))).toEqual(true);
    });
  });
});
