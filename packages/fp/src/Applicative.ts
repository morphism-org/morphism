import * as _Applicative from "fp-ts/lib/Applicative";

export type Applicative<F> = _Applicative.Applicative<F>;

export namespace Applicative {
  export import getApplicativeComposition = _Applicative.getApplicativeComposition;
}
