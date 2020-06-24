import { NonEmptyArray, Option } from ".";

export * from "fp-ts/lib/NonEmptyArray";

export const fromReadonlyArray = <A>(
  as: readonly A[]
): Option.Option<NonEmptyArray.NonEmptyArray<A>> =>
  NonEmptyArray.fromArray(as as A[]);
