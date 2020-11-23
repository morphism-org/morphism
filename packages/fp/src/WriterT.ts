import * as _WriterT from "fp-ts/lib/WriterT";

export type WriterT<M, W, A> = _WriterT.WriterT<M, W, A>;

export namespace WriterT {
  export import getWriterM = _WriterT.getWriterM;
}
