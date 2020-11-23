import * as _ValidationT from "fp-ts/lib/ValidationT";

export type ValidationT<M, E, A> = _ValidationT.ValidationT<M, E, A>;

export namespace ValidationT {
  export import getValidationM = _ValidationT.getValidationM;
}
