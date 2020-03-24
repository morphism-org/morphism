import { Option, These } from ".";

export * from "fp-ts/lib/These";

export const fromNullables = <A, B>(
  a?: Option.Nullable<A>,
  b?: Option.Nullable<B>
): Option.Option<These.These<A, B>> =>
  These.fromOptions(Option.fromNullable(a), Option.fromNullable(b));
