import * as BaseEither from "fp-ts/lib/Either";

// Still trying to see how this might work
// Flat export of the Either module is my current hangup

// export * as Either from "./Either";

export type ErrorOr<A> = BaseEither.Either<Error, A>;
export type ErrorsOr<A> = BaseEither.Either<readonly Error[], A>;

export type Either<E, A> = BaseEither.Left<E> | BaseEither.Right<A>;
