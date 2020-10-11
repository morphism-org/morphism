import * as _ReaderEither from "fp-ts/lib/ReaderEither";
import { Either } from "fp-ts/lib/Either";
import { Reader } from "fp-ts/Reader";

export type ReaderEither<R, E, A> = Reader<R, Either<E, A>>;

export namespace ReaderEither {
  /* CODEGEN :: FP-TS RE-EXPORTS */
  export import left = _ReaderEither.left;
  export import right = _ReaderEither.right;
  export import rightReader = _ReaderEither.rightReader;
  export import leftReader = _ReaderEither.leftReader;
  export import ask = _ReaderEither.ask;
  export import asks = _ReaderEither.asks;
  export import fromEither = _ReaderEither.fromEither;
  export import fromOption = _ReaderEither.fromOption;
  export import fromPredicate = _ReaderEither.fromPredicate;
  export import fold = _ReaderEither.fold;
  export import getOrElseW = _ReaderEither.getOrElseW;
  export import getOrElse = _ReaderEither.getOrElse;
  export import orElse = _ReaderEither.orElse;
  export import swap = _ReaderEither.swap;
  export import local = _ReaderEither.local;
  export import fromEitherK = _ReaderEither.fromEitherK;
  export import chainEitherKW = _ReaderEither.chainEitherKW;
  export import chainEitherK = _ReaderEither.chainEitherK;
  export import filterOrElse = _ReaderEither.filterOrElse;
  export import map = _ReaderEither.map;
  export import bimap = _ReaderEither.bimap;
  export import mapLeft = _ReaderEither.mapLeft;
  export import apW = _ReaderEither.apW;
  export import ap = _ReaderEither.ap;
  export import apFirst = _ReaderEither.apFirst;
  export import apSecond = _ReaderEither.apSecond;
  export import chainW = _ReaderEither.chainW;
  export import chain = _ReaderEither.chain;
  export import chainFirstW = _ReaderEither.chainFirstW;
  export import chainFirst = _ReaderEither.chainFirst;
  export import flatten = _ReaderEither.flatten;
  export import alt = _ReaderEither.alt;
  export import throwError = _ReaderEither.throwError;
  export import getSemigroup = _ReaderEither.getSemigroup;
  export import getApplySemigroup = _ReaderEither.getApplySemigroup;
  export import getApplyMonoid = _ReaderEither.getApplyMonoid;
  export import getApplicativeReaderValidation = _ReaderEither.getApplicativeReaderValidation;
  export import getAltReaderValidation = _ReaderEither.getAltReaderValidation;
  export import getReaderValidation = _ReaderEither.getReaderValidation;
  export import Functor = _ReaderEither.Functor;
  export import Applicative = _ReaderEither.Applicative;
  export import Monad = _ReaderEither.Monad;
  export import Bifunctor = _ReaderEither.Bifunctor;
  export import Alt = _ReaderEither.Alt;
  export import MonadThrow = _ReaderEither.MonadThrow;
  export import readerEither = _ReaderEither.readerEither;
  export import bindTo = _ReaderEither.bindTo;
  export import bindW = _ReaderEither.bindW;
  export import bind = _ReaderEither.bind;
  export import apSW = _ReaderEither.apSW;
  /* CODEGEN :: FP-TS RE-EXPORTS */
}
