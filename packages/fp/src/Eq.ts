import * as _Eq from "fp-ts/lib/Eq";

export interface Eq<A> {
  readonly equals: (x: A, y: A) => boolean;
}

export namespace Eq {
  export import fromEquals = _Eq.fromEquals;
  export import contramap = _Eq.contramap;
  export import eqStrict = _Eq.eqStrict;
  export import strictEqual = _Eq.strictEqual;
  export import eqString = _Eq.eqString;
  export import eqNumber = _Eq.eqNumber;
  export import eqBoolean = _Eq.eqBoolean;
  export import getStructEq = _Eq.getStructEq;
  export import getTupleEq = _Eq.getTupleEq;
  export import eqDate = _Eq.eqDate;
  export import getMonoid = _Eq.getMonoid;
  export import Contravariant = _Eq.Contravariant;
  export import eq = _Eq.eq;
}
