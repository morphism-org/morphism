import * as _EitherT from "fp-ts/lib/EitherT";

export type EitherT<M, E, A> = _EitherT.EitherT<M, E, A>;

export namespace EitherT {
  export import getEitherM = _EitherT.getEitherM;
}
