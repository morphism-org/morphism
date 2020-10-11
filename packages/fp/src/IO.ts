import * as _IO from "fp-ts/lib/IO";

/**
 * `IO<A>` represents a non-deterministic synchronous computation that can cause side effects, yields
 * a value of type `A` and **never fails**. If you want to represent a synchronous computation that
 * may fail, please see `IOEither`.
 */
export type IO<A> = () => A;

export namespace IO {
  /* CODEGEN :: FP-TS RE-EXPORTS */
  export import map = _IO.map;
  export import ap = _IO.ap;
  export import apFirst = _IO.apFirst;
  export import apSecond = _IO.apSecond;
  export import of = _IO.of;
  export import chain = _IO.chain;
  export import chainFirst = _IO.chainFirst;
  export import flatten = _IO.flatten;
  export import fromIO = _IO.fromIO;
  export import getSemigroup = _IO.getSemigroup;
  export import getMonoid = _IO.getMonoid;
  export import Functor = _IO.Functor;
  export import Applicative = _IO.Applicative;
  export import Monad = _IO.Monad;
  export import MonadIO = _IO.MonadIO;
  export import ChainRec = _IO.ChainRec;
  export import io = _IO.io;
  export import bindTo = _IO.bindTo;
  export import bind = _IO.bind;
  /* CODEGEN :: FP-TS RE-EXPORTS */
}
