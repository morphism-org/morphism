import * as _Monoid from "fp-ts/lib/Monoid";

export type Monoid<A> = _Monoid.Monoid<A>;

export namespace Monoid {
  export import monoidAll = _Monoid.monoidAll;
  export import monoidAny = _Monoid.monoidAny;
  export import monoidSum = _Monoid.monoidSum;
  export import monoidProduct = _Monoid.monoidProduct;
  export import monoidString = _Monoid.monoidString;
  export import monoidVoid = _Monoid.monoidVoid;
  export import fold = _Monoid.fold;
  export import getTupleMonoid = _Monoid.getTupleMonoid;
  export import getDualMonoid = _Monoid.getDualMonoid;
  export import getFunctionMonoid = _Monoid.getFunctionMonoid;
  export import getEndomorphismMonoid = _Monoid.getEndomorphismMonoid;
  export import getStructMonoid = _Monoid.getStructMonoid;
  export import getMeetMonoid = _Monoid.getMeetMonoid;
  export import getJoinMonoid = _Monoid.getJoinMonoid;
}
