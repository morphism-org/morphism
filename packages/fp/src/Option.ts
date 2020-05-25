import { Do as doNotationFor } from "fp-ts-contrib/lib/Do";

import { Option } from ".";

export * from "fp-ts/lib/Option";

export type Nullable<A> = A | null | undefined;

const doNotation = doNotationFor(Option.option);
export { doNotation as do };
