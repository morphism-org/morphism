import * as _StateT from "fp-ts/lib/StateT";

export type StateT<M, S, A> = _StateT.StateT<M, S, A>;

export namespace StateT {
  export import getStateM = _StateT.getStateM;
}
