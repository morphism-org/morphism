import { NonEmptyArray, Option } from ".";

export * from "fp-ts/lib/NonEmptyArray";

export const fromArray: <A>(
  as: A[] | readonly A[]
) => Option.Option<
  NonEmptyArray.NonEmptyArray<A>
> = NonEmptyArray.fromArray as any;
