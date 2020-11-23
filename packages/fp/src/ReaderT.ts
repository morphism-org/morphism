import * as _ReaderT from "fp-ts/lib/ReaderT";

export type ReaderT<M, R, A> = _ReaderT.ReaderT<M, R, A>;

export namespace ReaderT {
  export import getReaderM = _ReaderT.getReaderM;
}
