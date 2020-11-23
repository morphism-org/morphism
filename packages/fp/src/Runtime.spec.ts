import { ReadonlyArray, Runtime } from ".";

describe("Runtime", () => {
  describe("nullable", () => {
    test.each`
      a                    | name         | lefts          | rights
      ${Runtime.boolean()} | ${"boolean"} | ${[1, "a"]}    | ${[true, false]}
      ${Runtime.number()}  | ${"number"}  | ${["a", true]} | ${[1, -50]}
      ${Runtime.string()}  | ${"string"}  | ${[1, true]}   | ${["a", ""]}
    `("nullable($name)", ({ a, lefts, rights }) => {
      const decodeValues = ReadonlyArray.map(
        Runtime.decode(Runtime.nullable(a))
      );

      const rightsWithMaybes: ReadonlyArray<unknown | null | undefined> = [
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        ...rights,
        null,
        undefined,
      ];

      expect(ReadonlyArray.rights(decodeValues(lefts)).length).toEqual(0);

      expect(
        ReadonlyArray.lefts(decodeValues(rightsWithMaybes)).length
      ).toEqual(0);
    });
  });
});
