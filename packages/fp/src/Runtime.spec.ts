import { List, Option, Runtime } from ".";

describe("Runtime", () => {
  describe("nullable", () => {
    test.each`
      a                  | name         | lefts          | rights
      ${Runtime.boolean} | ${"boolean"} | ${[1, "a"]}    | ${[true, false]}
      ${Runtime.number}  | ${"number"}  | ${["a", true]} | ${[1, -50]}
      ${Runtime.string}  | ${"string"}  | ${[1, true]}   | ${["a", ""]}
    `("nullable($name)", ({ a, lefts, rights }) => {
      const decodeValues = List.map(Runtime.decode(Runtime.nullable(a)));
      const rightsWithMaybes: ReadonlyArray<Option.Nullable<unknown>> = [
        ...rights,
        null,
        undefined
      ];

      expect(List.rights(decodeValues(lefts)).length).toEqual(0);
      expect(List.lefts(decodeValues(rightsWithMaybes)).length).toEqual(0);
    });
  });
});
