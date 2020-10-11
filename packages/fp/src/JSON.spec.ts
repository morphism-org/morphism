import { Either, JSON, pipe } from ".";

describe("JSON", () => {
  describe("parse", () => {
    describe("valid json", () => {
      test.each`
        a               | expected
        ${"[true]"}     | ${[true]}
        ${"[1]"}        | ${[1]}
        ${`["a"]`}      | ${["a"]}
        ${`{"a":true}`} | ${{ a: true }}
        ${`{"b":1}`}    | ${{ b: 1 }}
        ${`{"c":"a"}`}  | ${{ c: "a" }}
      `("JSON.parse($a) === $expected", ({ a, expected }) => {
        expect(JSON.parse(a)).toEqual(Either.right(expected));
      });
    });

    describe("invalid json", () => {
      test.each`
        a
        ${"[true1]"}
        ${"`[1]"}
        ${"[a]"}
        ${`{"a':true}`}
        ${`{"a","b":1}`}
        ${`{"c""a"}`}
      `("JSON.parse($a) fails", ({ a }) => {
        pipe(JSON.parse(a), Either.map(fail));
      });
    });
  });

  describe("Stringify", () => {
    const bigInt = BigInt(
      "0b11111111111111111111111111111111111111111111111111111"
    );

    describe("short", () => {
      describe("can't be stringified", () => {
        test.each`
          a              | expected
          ${{ a: true }} | ${`{"a":true}`}
          ${{ b: 1 }}    | ${`{"b":1}`}
          ${{ c: "a" }}  | ${`{"c":"a"}`}
        `("short($a) === Always.short($a) === $expected", ({ a, expected }) => {
          expect(JSON.Stringify.short(a)).toEqual(Either.right(expected));
          expect(JSON.Stringify.Always.short(a)).toEqual(expected);
        });
      });

      test.each`
        a              | expected
        ${{ a: true }} | ${`{"a":true}`}
        ${{ b: 1 }}    | ${`{"b":1}`}
        ${{ c: "a" }}  | ${`{"c":"a"}`}
      `("short($a) === Always.short($a) === $expected", ({ a, expected }) => {
        expect(JSON.Stringify.short(a)).toEqual(Either.right(expected));
        expect(JSON.Stringify.Always.short(a)).toEqual(expected);
      });
    });

    describe("pretty", () => {
      test.each`
        a              | expected
        ${{ a: true }} | ${`{\n  "a": true\n}`}
        ${{ b: 1 }}    | ${`{\n  "b": 1\n}`}
        ${{ c: "a" }}  | ${`{\n  "c": "a"\n}`}
      `("short($a) === Always.short($a) === $expected", ({ a, expected }) => {
        expect(JSON.Stringify.pretty(a)).toEqual(Either.right(expected));
        expect(JSON.Stringify.Always.pretty(a)).toEqual(expected);
      });
    });

    describe("Always", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const circular: any = {};

      // eslint-disable-next-line functional/no-expression-statement,functional/immutable-data,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
      circular.circular = circular;

      test.each`
        a
        ${circular}
        ${{ b: bigInt }}
      `("short($a) === pretty($a)", ({ a }) => {
        expect(typeof JSON.Stringify.Always.short(a)).toEqual("string");
        expect(typeof JSON.Stringify.Always.pretty(a)).toEqual("string");
      });
    });
  });
});
