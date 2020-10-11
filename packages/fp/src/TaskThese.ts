import { These } from "fp-ts/lib/These";
import { Task } from "fp-ts/lib/Task";
import * as _TaskThese from "fp-ts/lib/TaskThese";

export type TaskThese<E, A> = Task<These<E, A>>;

export namespace TaskThese {
  /* CODEGEN :: FP-TS RE-EXPORTS */
  export import left = _TaskThese.left;
  export import right = _TaskThese.right;
  export import both = _TaskThese.both;
  export import rightTask = _TaskThese.rightTask;
  export import leftTask = _TaskThese.leftTask;
  export import rightIO = _TaskThese.rightIO;
  export import leftIO = _TaskThese.leftIO;
  export import fromIOEither = _TaskThese.fromIOEither;
  export import fold = _TaskThese.fold;
  export import toTuple = _TaskThese.toTuple;
  export import swap = _TaskThese.swap;
  export import map = _TaskThese.map;
  export import bimap = _TaskThese.bimap;
  export import mapLeft = _TaskThese.mapLeft;
  export import of = _TaskThese.of;
  export import fromIO = _TaskThese.fromIO;
  export import fromTask = _TaskThese.fromTask;
  export import getSemigroup = _TaskThese.getSemigroup;
  export import getApplicative = _TaskThese.getApplicative;
  export import getMonad = _TaskThese.getMonad;
  export import functorTaskThese = _TaskThese.functorTaskThese;
  export import bifunctorTaskThese = _TaskThese.bifunctorTaskThese;
  /* CODEGEN :: FP-TS RE-EXPORTS */
}
