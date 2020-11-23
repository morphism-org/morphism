import * as _Foldable from "fp-ts/lib/Foldable";

export type Foldable<F> = _Foldable.Foldable<F>;

export namespace Foldable {
  export import getFoldableComposition = _Foldable.getFoldableComposition;
  export import foldM = _Foldable.foldM;
  export import reduceM = _Foldable.reduceM;
  export import intercalate = _Foldable.intercalate;
  export import toArray = _Foldable.toArray;
  export import traverse_ = _Foldable.traverse_;
}
