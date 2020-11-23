import * as _Traversable from "fp-ts/lib/Traversable";

export type Traversable<T> = _Traversable.Traversable<T>;

export namespace Traversable {
  export import getTraversableComposition = _Traversable.getTraversableComposition;
}
