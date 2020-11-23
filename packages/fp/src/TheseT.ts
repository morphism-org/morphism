import * as _TheseT from "fp-ts/lib/TheseT";

export type TheseT<M, E, A> = _TheseT.TheseT<M, E, A>;

export namespace TheseT {
  export import getTheseM = _TheseT.getTheseM;
}
