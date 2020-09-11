import * as BaseEither from "fp-ts/Either";
import { Exception, Fn } from "./index";
import { Do as doNotationFrom } from "fp-ts-contrib/lib/Do";

export type Either<E, A> = BaseEither.Left<E> | BaseEither.Right<A>;

export namespace Either {
  export type ErrorOr<A> = BaseEither.Either<Error, A>;
  export type ErrorsOr<A> = BaseEither.Either<readonly Error[], A>;

  export const doNotation = () => doNotationFrom(Either.either);

  export const fromUnsafe = <A>(fn: Fn.Lazy<A>): BaseEither.Either<Error, A> =>
    BaseEither.tryCatch(fn, Exception.fromUnknown);

  export import isLeft = BaseEither.isLeft;
  export import isRight = BaseEither.isRight;
  export import left = BaseEither.left;
  export import right = BaseEither.right;
  export import fromNullable = BaseEither.fromNullable;
  export import tryCatch = BaseEither.tryCatch;
  export import parseJSON = BaseEither.parseJSON;
  export import stringifyJSON = BaseEither.stringifyJSON;
  export import fromOption = BaseEither.fromOption;
  export import fromPredicate = BaseEither.fromPredicate;
  export import fold = BaseEither.fold;
  export import getOrElseW = BaseEither.getOrElseW;
  export import getOrElse = BaseEither.getOrElse;
  export import swap = BaseEither.swap;
  export import orElse = BaseEither.orElse;
  export import filterOrElse = BaseEither.filterOrElse;
  export import map = BaseEither.map;
  export import bimap = BaseEither.bimap;
  export import mapLeft = BaseEither.mapLeft;
  export import apW = BaseEither.apW;
  export import ap = BaseEither.ap;
  export import apFirst = BaseEither.apFirst;
  export import apSecond = BaseEither.apSecond;
  export import of = BaseEither.of;
  export import chainW = BaseEither.chainW;
  export import chain = BaseEither.chain;
  export import chainFirstW = BaseEither.chainFirstW;
  export import chainFirst = BaseEither.chainFirst;
  export import flatten = BaseEither.flatten;
  export import alt = BaseEither.alt;
  export import extend = BaseEither.extend;
  export import duplicate = BaseEither.duplicate;
  export import reduce = BaseEither.reduce;
  export import foldMap = BaseEither.foldMap;
  export import reduceRight = BaseEither.reduceRight;
  export import traverse = BaseEither.traverse;
  export import sequence = BaseEither.sequence;
  export import throwError = BaseEither.throwError;
  export import getShow = BaseEither.getShow;
  export import getEq = BaseEither.getEq;
  export import getSemigroup = BaseEither.getSemigroup;
  export import getApplySemigroup = BaseEither.getApplySemigroup;
  export import getApplyMonoid = BaseEither.getApplyMonoid;
  export import getFilterable = BaseEither.getFilterable;
  export import getWitherable = BaseEither.getWitherable;
  export import getApplicativeValidation = BaseEither.getApplicativeValidation;
  export import getAltValidation = BaseEither.getAltValidation;
  export import getValidation = BaseEither.getValidation;
  export import getValidationSemigroup = BaseEither.getValidationSemigroup;
  export import Functor = BaseEither.Functor;
  export import Applicative = BaseEither.Applicative;
  export import Monad = BaseEither.Monad;
  export import Foldable = BaseEither.Foldable;
  export import Traversable = BaseEither.Traversable;
  export import Bifunctor = BaseEither.Bifunctor;
  export import Alt = BaseEither.Alt;
  export import Extend = BaseEither.Extend;
  export import ChainRec = BaseEither.ChainRec;
  export import MonadThrow = BaseEither.MonadThrow;
  export import getValidationMonoid = BaseEither.getValidationMonoid;
  export import either = BaseEither.either;
  export import toError = BaseEither.toError;
  export import elem = BaseEither.elem;
  export import exists = BaseEither.exists;
  export import bindTo = BaseEither.bindTo;
  export import bindW = BaseEither.bindW;
  export import bind = BaseEither.bind;
  export import apSW = BaseEither.apSW;
}
