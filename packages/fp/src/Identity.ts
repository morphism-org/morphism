import * as _Identity from "fp-ts/lib/Identity";

export type Identity<A> = A;

export namespace Identity {
  export import map = _Identity.map;
  export import ap = _Identity.ap;
  export import apFirst = _Identity.apFirst;
  export import apSecond = _Identity.apSecond;
  export import of = _Identity.of;
  export import chain = _Identity.chain;
  export import chainFirst = _Identity.chainFirst;
  export import extend = _Identity.extend;
  export import extract = _Identity.extract;
  export import duplicate = _Identity.duplicate;
  export import flatten = _Identity.flatten;
  export import reduce = _Identity.reduce;
  export import foldMap = _Identity.foldMap;
  export import reduceRight = _Identity.reduceRight;
  export import traverse = _Identity.traverse;
  export import sequence = _Identity.sequence;
  export import alt = _Identity.alt;
  export import getShow = _Identity.getShow;
  export import getEq = _Identity.getEq;
  export import Functor = _Identity.Functor;
  export import Applicative = _Identity.Applicative;
  export import Monad = _Identity.Monad;
  export import Foldable = _Identity.Foldable;
  export import Traversable = _Identity.Traversable;
  export import Alt = _Identity.Alt;
  export import Comonad = _Identity.Comonad;
  export import ChainRec = _Identity.ChainRec;
  export import identity = _Identity.identity;
  export import bindTo = _Identity.bindTo;
  export import bind = _Identity.bind;
  export import apS = _Identity.apS;
}
