import * as _ChainRec from "fp-ts/lib/ChainRec";

export type ChainRec<F> = _ChainRec.ChainRec<F>;

export namespace ChainRec {
  export import tailRec = _ChainRec.tailRec;
}
