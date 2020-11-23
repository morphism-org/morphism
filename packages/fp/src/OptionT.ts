import * as _OptionT from "fp-ts/lib/OptionT";

export type OptionT<M, A> = _OptionT.OptionT<M, A>;

export namespace OptionT {
  export import getOptionM = _OptionT.getOptionM;
}
