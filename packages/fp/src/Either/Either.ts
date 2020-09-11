import { Do as doNotationFrom } from "fp-ts-contrib/lib/Do";
import * as Either from "fp-ts/lib/Either";
import { Exception, Fn } from "../index";

export * from "fp-ts/lib/Either";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const doNotation = () => doNotationFrom(Either.either);
export { doNotation as do };

export const fromUnsafe = <A>(fn: Fn.Lazy<A>): Either.Either<Error, A> =>
  Either.tryCatch(fn, Exception.fromUnknown);
