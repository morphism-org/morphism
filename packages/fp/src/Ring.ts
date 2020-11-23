import * as _Ring from "fp-ts/lib/Ring";

export type Ring<A> = _Ring.Ring<A>;

export namespace Ring {
  export import getFunctionRing = _Ring.getFunctionRing;
  export import negate = _Ring.negate;
  export import getTupleRing = _Ring.getTupleRing;
}
