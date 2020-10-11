import * as _Ordering from "fp-ts/lib/Ordering";

export type Ordering = -1 | 0 | 1;

export namespace Ordering {
  /* CODEGEN :: FP-TS RE-EXPORTS */
  export import sign = _Ordering.sign;
  export import eqOrdering = _Ordering.eqOrdering;
  export import semigroupOrdering = _Ordering.semigroupOrdering;
  export import monoidOrdering = _Ordering.monoidOrdering;
  /* CODEGEN :: FP-TS RE-EXPORTS */
}
