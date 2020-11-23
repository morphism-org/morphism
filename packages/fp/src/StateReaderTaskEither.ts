import * as _StateReaderTaskEither from "fp-ts/lib/StateReaderTaskEither";

export type StateReaderTaskEither<
  S,
  R,
  E,
  A
> = _StateReaderTaskEither.StateReaderTaskEither<S, R, E, A>;

export namespace StateReaderTaskEither {
  export import left = _StateReaderTaskEither.left;
  export import right = _StateReaderTaskEither.right;
  export import rightTask = _StateReaderTaskEither.rightTask;
  export import leftTask = _StateReaderTaskEither.leftTask;
  export import fromTaskEither = _StateReaderTaskEither.fromTaskEither;
  export import rightReader = _StateReaderTaskEither.rightReader;
  export import leftReader = _StateReaderTaskEither.leftReader;
  export import fromIOEither = _StateReaderTaskEither.fromIOEither;
  export import fromReaderEither = _StateReaderTaskEither.fromReaderEither;
  export import rightIO = _StateReaderTaskEither.rightIO;
  export import leftIO = _StateReaderTaskEither.leftIO;
  export import rightState = _StateReaderTaskEither.rightState;
  export import leftState = _StateReaderTaskEither.leftState;
  export import fromReaderTaskEither = _StateReaderTaskEither.fromReaderTaskEither;
  export import get = _StateReaderTaskEither.get;
  export import put = _StateReaderTaskEither.put;
  export import modify = _StateReaderTaskEither.modify;
  export import gets = _StateReaderTaskEither.gets;
  export import fromEither = _StateReaderTaskEither.fromEither;
  export import fromOption = _StateReaderTaskEither.fromOption;
  export import fromPredicate = _StateReaderTaskEither.fromPredicate;
  export import fromEitherK = _StateReaderTaskEither.fromEitherK;
  export import chainEitherKW = _StateReaderTaskEither.chainEitherKW;
  export import chainEitherK = _StateReaderTaskEither.chainEitherK;
  export import fromIOEitherK = _StateReaderTaskEither.fromIOEitherK;
  export import chainIOEitherKW = _StateReaderTaskEither.chainIOEitherKW;
  export import chainIOEitherK = _StateReaderTaskEither.chainIOEitherK;
  export import fromTaskEitherK = _StateReaderTaskEither.fromTaskEitherK;
  export import chainTaskEitherKW = _StateReaderTaskEither.chainTaskEitherKW;
  export import chainTaskEitherK = _StateReaderTaskEither.chainTaskEitherK;
  export import fromReaderTaskEitherK = _StateReaderTaskEither.fromReaderTaskEitherK;
  export import chainReaderTaskEitherKW = _StateReaderTaskEither.chainReaderTaskEitherKW;
  export import chainReaderTaskEitherK = _StateReaderTaskEither.chainReaderTaskEitherK;
  export import filterOrElse = _StateReaderTaskEither.filterOrElse;
  export import map = _StateReaderTaskEither.map;
  export import bimap = _StateReaderTaskEither.bimap;
  export import mapLeft = _StateReaderTaskEither.mapLeft;
  export import apW = _StateReaderTaskEither.apW;
  export import ap = _StateReaderTaskEither.ap;
  export import apFirst = _StateReaderTaskEither.apFirst;
  export import apSecond = _StateReaderTaskEither.apSecond;
  export import of = _StateReaderTaskEither.of;
  export import chainW = _StateReaderTaskEither.chainW;
  export import chain = _StateReaderTaskEither.chain;
  export import chainFirstW = _StateReaderTaskEither.chainFirstW;
  export import chainFirst = _StateReaderTaskEither.chainFirst;
  export import flatten = _StateReaderTaskEither.flatten;
  export import alt = _StateReaderTaskEither.alt;
  export import fromIO = _StateReaderTaskEither.fromIO;
  export import fromTask = _StateReaderTaskEither.fromTask;
  export import throwError = _StateReaderTaskEither.throwError;
  export import Functor = _StateReaderTaskEither.Functor;
  export import Applicative = _StateReaderTaskEither.Applicative;
  export import Bifunctor = _StateReaderTaskEither.Bifunctor;
  export import Alt = _StateReaderTaskEither.Alt;
  export import stateReaderTaskEither = _StateReaderTaskEither.stateReaderTaskEither;
  export import run = _StateReaderTaskEither.run;
  export import evalState = _StateReaderTaskEither.evalState;
  export import execState = _StateReaderTaskEither.execState;
  export import evaluate = _StateReaderTaskEither.evaluate;
  export import execute = _StateReaderTaskEither.execute;
  export import bindTo = _StateReaderTaskEither.bindTo;
  export import bindW = _StateReaderTaskEither.bindW;
  export import bind = _StateReaderTaskEither.bind;
  export import apSW = _StateReaderTaskEither.apSW;
  export import apS = _StateReaderTaskEither.apS;
}
