import * as _Reader from "fp-ts/lib/Reader";

export type Reader<R, A> = _Reader.Reader<R, A>;

export namespace Reader {
  export import ask = _Reader.ask;
  export import asks = _Reader.asks;
  export import local = _Reader.local;
  export import map = _Reader.map;
  export import apW = _Reader.apW;
  export import ap = _Reader.ap;
  export import apFirst = _Reader.apFirst;
  export import apSecond = _Reader.apSecond;
  export import of = _Reader.of;
  export import chainW = _Reader.chainW;
  export import chain = _Reader.chain;
  export import chainFirst = _Reader.chainFirst;
  export import flatten = _Reader.flatten;
  export import compose = _Reader.compose;
  export import promap = _Reader.promap;
  export import id = _Reader.id;
  export import getSemigroup = _Reader.getSemigroup;
  export import getMonoid = _Reader.getMonoid;
  export import Functor = _Reader.Functor;
  export import Applicative = _Reader.Applicative;
  export import Monad = _Reader.Monad;
  export import Profunctor = _Reader.Profunctor;
  export import Category = _Reader.Category;
  export import reader = _Reader.reader;
  export import bindTo = _Reader.bindTo;
  export import bindW = _Reader.bindW;
  export import bind = _Reader.bind;
  export import apSW = _Reader.apSW;
  export import apS = _Reader.apS;
}
