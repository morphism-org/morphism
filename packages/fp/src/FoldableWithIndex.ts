import * as _FoldableWithIndex from "fp-ts/lib/FoldableWithIndex";

export type FoldableWithIndex<F, I> = _FoldableWithIndex.FoldableWithIndex<
  F,
  I
>;

export namespace FoldableWithIndex {
  export import getFoldableWithIndexComposition = _FoldableWithIndex.getFoldableWithIndexComposition;
}
