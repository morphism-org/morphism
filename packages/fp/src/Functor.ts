import * as _Functor from "fp-ts/lib/Functor";

export type Functor<F> = _Functor.Functor<F>;

export namespace Functor {
  export import getFunctorComposition = _Functor.getFunctorComposition;
}
