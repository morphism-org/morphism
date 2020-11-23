import * as _Semigroup from "fp-ts/lib/Semigroup";

export type Semigroup<A> = _Semigroup.Semigroup<A>;

export namespace Semigroup {
  export import fold = _Semigroup.fold;
  export import getFirstSemigroup = _Semigroup.getFirstSemigroup;
  export import getLastSemigroup = _Semigroup.getLastSemigroup;
  export import getTupleSemigroup = _Semigroup.getTupleSemigroup;
  export import getDualSemigroup = _Semigroup.getDualSemigroup;
  export import getFunctionSemigroup = _Semigroup.getFunctionSemigroup;
  export import getStructSemigroup = _Semigroup.getStructSemigroup;
  export import getMeetSemigroup = _Semigroup.getMeetSemigroup;
  export import getJoinSemigroup = _Semigroup.getJoinSemigroup;
  export import getObjectSemigroup = _Semigroup.getObjectSemigroup;
  export import semigroupAll = _Semigroup.semigroupAll;
  export import semigroupAny = _Semigroup.semigroupAny;
  export import semigroupSum = _Semigroup.semigroupSum;
  export import semigroupProduct = _Semigroup.semigroupProduct;
  export import semigroupString = _Semigroup.semigroupString;
  export import semigroupVoid = _Semigroup.semigroupVoid;
  export import getIntercalateSemigroup = _Semigroup.getIntercalateSemigroup;
}
