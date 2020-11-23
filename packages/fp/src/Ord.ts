import * as _Ord from "fp-ts/lib/Ord";

export type Ord<A> = _Ord.Ord<A>;

export namespace Ord {
  export import ordString = _Ord.ordString;
  export import ordNumber = _Ord.ordNumber;
  export import ordBoolean = _Ord.ordBoolean;
  export import lt = _Ord.lt;
  export import gt = _Ord.gt;
  export import leq = _Ord.leq;
  export import geq = _Ord.geq;
  export import min = _Ord.min;
  export import max = _Ord.max;
  export import clamp = _Ord.clamp;
  export import between = _Ord.between;
  export import fromCompare = _Ord.fromCompare;
  export import getSemigroup = _Ord.getSemigroup;
  export import getMonoid = _Ord.getMonoid;
  export import getTupleOrd = _Ord.getTupleOrd;
  export import getDualOrd = _Ord.getDualOrd;
  export import contramap = _Ord.contramap;
  export import ordDate = _Ord.ordDate;
  export import Contravariant = _Ord.Contravariant;
  export import ord = _Ord.ord;
}
