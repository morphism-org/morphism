import * as _FunctorWithIndex from "fp-ts/lib/FunctorWithIndex";

export type FunctorWithIndex<F, I> = _FunctorWithIndex.FunctorWithIndex<F, I>;

export namespace FunctorWithIndex {
  export import getFunctorWithIndexComposition = _FunctorWithIndex.getFunctorWithIndexComposition;
}
