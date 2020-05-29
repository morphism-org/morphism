import { Do as doNotationFrom } from "fp-ts-contrib/lib/Do";

import { Either, Exception, Fn } from ".";

export * from "fp-ts/lib/Either";

export type ErrorOr<A, E extends Error = Error> = Either.Either<E, A>;
export type ErrorsOr<
  A,
  E extends readonly Error[] = readonly Error[]
> = Either.Either<E, A>;

const doNotation = () => doNotationFrom(Either.either);
export { doNotation as do };

export const fromUnsafe = <A>(fn: Fn.Lazy<A>): ErrorOr<A> =>
  Either.tryCatch(fn, Exception.fromUnknown);
