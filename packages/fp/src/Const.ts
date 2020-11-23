import * as _Const from "fp-ts/lib/Const";

export type Const<E, A> = _Const.Const<E, A>;

export namespace Const {
  export import make = _Const.make;
  export import getShow = _Const.getShow;
  export import getEq = _Const.getEq;
  export import getOrd = _Const.getOrd;
  export import getBounded = _Const.getBounded;
  export import getSemigroup = _Const.getSemigroup;
  export import getMonoid = _Const.getMonoid;
  export import getSemiring = _Const.getSemiring;
  export import getRing = _Const.getRing;
  export import getHeytingAlgebra = _Const.getHeytingAlgebra;
  export import getBooleanAlgebra = _Const.getBooleanAlgebra;
  export import getApply = _Const.getApply;
  export import getApplicative = _Const.getApplicative;
  export import contramap = _Const.contramap;
  export import map = _Const.map;
  export import bimap = _Const.bimap;
  export import mapLeft = _Const.mapLeft;
  export import Functor = _Const.Functor;
  export import Contravariant = _Const.Contravariant;
  export import Bifunctor = _Const.Bifunctor;
  export import const_ = _Const.const_;
}
