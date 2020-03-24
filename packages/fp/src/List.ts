import { List, Option } from ".";

export * from "fp-ts/lib/ReadonlyArray";

export const nonNullables = <A>(
  as: readonly Option.Nullable<A>[]
): readonly A[] => List.filterMap(Option.fromNullable)(as);
