import * as _ReaderTaskEither from "fp-ts/lib/ReaderTaskEither";

export type ReaderTaskEither<R, E, A> = _ReaderTaskEither.ReaderTaskEither<
  R,
  E,
  A
>;

export namespace ReaderTaskEither {
  export import fromTaskEither = _ReaderTaskEither.fromTaskEither;
  export import left = _ReaderTaskEither.left;
  export import right = _ReaderTaskEither.right;
  export import rightTask = _ReaderTaskEither.rightTask;
  export import leftTask = _ReaderTaskEither.leftTask;
  export import rightReader = _ReaderTaskEither.rightReader;
  export import leftReader = _ReaderTaskEither.leftReader;
  export import rightReaderTask = _ReaderTaskEither.rightReaderTask;
  export import leftReaderTask = _ReaderTaskEither.leftReaderTask;
  export import fromIOEither = _ReaderTaskEither.fromIOEither;
  export import fromReaderEither = _ReaderTaskEither.fromReaderEither;
  export import rightIO = _ReaderTaskEither.rightIO;
  export import leftIO = _ReaderTaskEither.leftIO;
  export import ask = _ReaderTaskEither.ask;
  export import asks = _ReaderTaskEither.asks;
  export import fromEither = _ReaderTaskEither.fromEither;
  export import fromOption = _ReaderTaskEither.fromOption;
  export import fromPredicate = _ReaderTaskEither.fromPredicate;
  export import fold = _ReaderTaskEither.fold;
  export import getOrElseW = _ReaderTaskEither.getOrElseW;
  export import getOrElse = _ReaderTaskEither.getOrElse;
  export import orElse = _ReaderTaskEither.orElse;
  export import swap = _ReaderTaskEither.swap;
  export import local = _ReaderTaskEither.local;
  export import filterOrElse = _ReaderTaskEither.filterOrElse;
  export import fromEitherK = _ReaderTaskEither.fromEitherK;
  export import chainEitherKW = _ReaderTaskEither.chainEitherKW;
  export import chainEitherK = _ReaderTaskEither.chainEitherK;
  export import fromIOEitherK = _ReaderTaskEither.fromIOEitherK;
  export import chainIOEitherKW = _ReaderTaskEither.chainIOEitherKW;
  export import chainIOEitherK = _ReaderTaskEither.chainIOEitherK;
  export import fromTaskEitherK = _ReaderTaskEither.fromTaskEitherK;
  export import chainTaskEitherKW = _ReaderTaskEither.chainTaskEitherKW;
  export import chainTaskEitherK = _ReaderTaskEither.chainTaskEitherK;
  export import map = _ReaderTaskEither.map;
  export import bimap = _ReaderTaskEither.bimap;
  export import mapLeft = _ReaderTaskEither.mapLeft;
  export import apW = _ReaderTaskEither.apW;
  export import ap = _ReaderTaskEither.ap;
  export import apFirst = _ReaderTaskEither.apFirst;
  export import apSecond = _ReaderTaskEither.apSecond;
  export import of = _ReaderTaskEither.of;
  export import chainW = _ReaderTaskEither.chainW;
  export import chain = _ReaderTaskEither.chain;
  export import chainFirstW = _ReaderTaskEither.chainFirstW;
  export import chainFirst = _ReaderTaskEither.chainFirst;
  export import flatten = _ReaderTaskEither.flatten;
  export import alt = _ReaderTaskEither.alt;
  export import fromIO = _ReaderTaskEither.fromIO;
  export import fromTask = _ReaderTaskEither.fromTask;
  export import throwError = _ReaderTaskEither.throwError;
  export import getSemigroup = _ReaderTaskEither.getSemigroup;
  export import getApplySemigroup = _ReaderTaskEither.getApplySemigroup;
  export import getApplyMonoid = _ReaderTaskEither.getApplyMonoid;
  export import getApplicativeReaderTaskValidation = _ReaderTaskEither.getApplicativeReaderTaskValidation;
  export import getAltReaderTaskValidation = _ReaderTaskEither.getAltReaderTaskValidation;
  export import getReaderTaskValidation = _ReaderTaskEither.getReaderTaskValidation;
  export import Functor = _ReaderTaskEither.Functor;
  export import ApplicativePar = _ReaderTaskEither.ApplicativePar;
  export import ApplicativeSeq = _ReaderTaskEither.ApplicativeSeq;
  export import Bifunctor = _ReaderTaskEither.Bifunctor;
  export import Alt = _ReaderTaskEither.Alt;
  export import readerTaskEither = _ReaderTaskEither.readerTaskEither;
  export import run = _ReaderTaskEither.run;
  export import bracket = _ReaderTaskEither.bracket;
  export import bindTo = _ReaderTaskEither.bindTo;
  export import bindW = _ReaderTaskEither.bindW;
  export import bind = _ReaderTaskEither.bind;
  export import apSW = _ReaderTaskEither.apSW;
  export import apS = _ReaderTaskEither.apS;
}
