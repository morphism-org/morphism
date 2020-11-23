import * as _Task from "fp-ts/lib/Task";

export type Task<A> = () => Promise<A>;

export namespace Task {
  export import fromIO = _Task.fromIO;
  export import delay = _Task.delay;
  export import fromIOK = _Task.fromIOK;
  export import chainIOK = _Task.chainIOK;
  export import map = _Task.map;
  export import ap = _Task.ap;
  export import apFirst = _Task.apFirst;
  export import apSecond = _Task.apSecond;
  export import of = _Task.of;
  export import chain = _Task.chain;
  export import chainFirst = _Task.chainFirst;
  export import flatten = _Task.flatten;
  export import fromTask = _Task.fromTask;
  export import getSemigroup = _Task.getSemigroup;
  export import getMonoid = _Task.getMonoid;
  export import getRaceMonoid = _Task.getRaceMonoid;
  export import Functor = _Task.Functor;
  export import ApplicativePar = _Task.ApplicativePar;
  export import ApplicativeSeq = _Task.ApplicativeSeq;
  export import task = _Task.task;
  export import never = _Task.never;
  export import bindTo = _Task.bindTo;
  export import bind = _Task.bind;
  export import apS = _Task.apS;
}
