import { Either, Exception, Fn } from ".";
import { Task } from "fp-ts/lib/Task";

import * as BaseTaskEither from "fp-ts/lib/TaskEither";
import { Do as doNotationFrom } from "fp-ts-contrib/lib/Do";

export type TaskEither<E, A> = Task<Either<E, A>>;

export namespace TaskEither {
  export type ErrorOr<A> = BaseTaskEither.TaskEither<Error, A>;
  export type ErrorOrs<A> = BaseTaskEither.TaskEither<readonly Error[], A>;

  export const doNotation = () => doNotationFrom(BaseTaskEither.taskEither);

  export const fromUnsafe = <A>(fn: Fn.Lazy<Promise<A>>): ErrorOr<A> =>
    BaseTaskEither.tryCatch(fn, Exception.fromUnknown);

  export import left = BaseTaskEither.left;
  export import right = BaseTaskEither.right;
  export import rightTask = BaseTaskEither.rightTask;
  export import leftTask = BaseTaskEither.leftTask;
  export import rightIO = BaseTaskEither.rightIO;
  export import leftIO = BaseTaskEither.leftIO;
  export import fromIOEither = BaseTaskEither.fromIOEither;
  export import fromEither = BaseTaskEither.fromEither;
  export import fromOption = BaseTaskEither.fromOption;
  export import fromPredicate = BaseTaskEither.fromPredicate;
  export import tryCatch = BaseTaskEither.tryCatch;
  export import fold = BaseTaskEither.fold;
  export import getOrElseW = BaseTaskEither.getOrElseW;
  export import getOrElse = BaseTaskEither.getOrElse;
  export import orElse = BaseTaskEither.orElse;
  export import swap = BaseTaskEither.swap;
  export import filterOrElse = BaseTaskEither.filterOrElse;
  export import tryCatchK = BaseTaskEither.tryCatchK;
  export import fromEitherK = BaseTaskEither.fromEitherK;
  export import fromIOEitherK = BaseTaskEither.fromIOEitherK;
  export import chainEitherKW = BaseTaskEither.chainEitherKW;
  export import chainEitherK = BaseTaskEither.chainEitherK;
  export import chainIOEitherKW = BaseTaskEither.chainIOEitherKW;
  export import chainIOEitherK = BaseTaskEither.chainIOEitherK;
  export import map = BaseTaskEither.map;
  export import bimap = BaseTaskEither.bimap;
  export import mapLeft = BaseTaskEither.mapLeft;
  export import apW = BaseTaskEither.apW;
  export import ap = BaseTaskEither.ap;
  export import apFirst = BaseTaskEither.apFirst;
  export import apSecond = BaseTaskEither.apSecond;
  export import chainW = BaseTaskEither.chainW;
  export import chain = BaseTaskEither.chain;
  export import chainFirstW = BaseTaskEither.chainFirstW;
  export import chainFirst = BaseTaskEither.chainFirst;
  export import flatten = BaseTaskEither.flatten;
  export import alt = BaseTaskEither.alt;
  export import of = BaseTaskEither.of;
  export import fromIO = BaseTaskEither.fromIO;
  export import fromTask = BaseTaskEither.fromTask;
  export import throwError = BaseTaskEither.throwError;
  export import getSemigroup = BaseTaskEither.getSemigroup;
  export import getApplySemigroup = BaseTaskEither.getApplySemigroup;
  export import getApplyMonoid = BaseTaskEither.getApplyMonoid;
  export import getApplicativeTaskValidation = BaseTaskEither.getApplicativeTaskValidation;
  export import getAltTaskValidation = BaseTaskEither.getAltTaskValidation;
  export import getTaskValidation = BaseTaskEither.getTaskValidation;
  export import getFilterable = BaseTaskEither.getFilterable;
  export import Functor = BaseTaskEither.Functor;
  export import ApplicativePar = BaseTaskEither.ApplicativePar;
  export import ApplicativeSeq = BaseTaskEither.ApplicativeSeq;
  export import Bifunctor = BaseTaskEither.Bifunctor;
  export import Alt = BaseTaskEither.Alt;
  export import taskEither = BaseTaskEither.taskEither;
  export import taskify = BaseTaskEither.taskify;
  export import bracket = BaseTaskEither.bracket;
  export import bindTo = BaseTaskEither.bindTo;
  export import bindW = BaseTaskEither.bindW;
  export import bind = BaseTaskEither.bind;
  export import apSW = BaseTaskEither.apSW;
}
