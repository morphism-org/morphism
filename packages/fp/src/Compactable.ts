import * as _Compactable from "fp-ts/lib/Compactable";

export type Compactable<F> = _Compactable.Compactable<F>;

export namespace Compactable {
  export import getCompactableComposition = _Compactable.getCompactableComposition;
}
