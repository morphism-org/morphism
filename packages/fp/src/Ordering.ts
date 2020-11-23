import * as _Ordering from "fp-ts/lib/Ordering";

export type Ordering = -1 | 0 | 1;

export namespace Ordering {
  export import sign = _Ordering.sign;
  export import eqOrdering = _Ordering.eqOrdering;
  export import semigroupOrdering = _Ordering.semigroupOrdering;
  export import monoidOrdering = _Ordering.monoidOrdering;
  export import invert = _Ordering.invert;
}
