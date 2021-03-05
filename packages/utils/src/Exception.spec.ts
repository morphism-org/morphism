import * as Exception from "./Exception";

describe("Exception", () => {
  it("handles unknown", () => {
    const stringError = "some error";
    const objectError = { value: "some error" };
    const arrayError = ["some error"];

    expect(Exception.fromUnknown()(stringError).message).toStrictEqual(
      'Unknown Error...\n\n"some error"'
    );
    expect(Exception.fromUnknown()(objectError).message).toStrictEqual(
      'Unknown Error...\n\n{\n  "value": "some error"\n}'
    );
    expect(Exception.fromUnknown()(arrayError).message).toStrictEqual(
      'Unknown Error...\n\n[\n  "some error"\n]'
    );
  });

  it("handles errors", () => {
    const error = new Error("error string");

    expect(Exception.fromUnknown()(error).message).toEqual("error string");
  });

  it("uses the 'prefix' argument when input is not an error", () => {
    const stringError = "some error";

    expect(Exception.fromUnknown("Some Prefix")(stringError).message).toEqual(
      'Some Prefix\n\n"some error"'
    );
  });
});
