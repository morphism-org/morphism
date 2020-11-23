import * as _ReaderTask from "fp-ts/lib/ReaderTask";

export type ReaderTask<R, A> = _ReaderTask.ReaderTask<R, A>;

export namespace ReaderTask {
  export import fromTask = _ReaderTask.fromTask;
  export import fromReader = _ReaderTask.fromReader;
  export import fromIO = _ReaderTask.fromIO;
  export import ask = _ReaderTask.ask;
  export import asks = _ReaderTask.asks;
  export import local = _ReaderTask.local;
  export import fromIOK = _ReaderTask.fromIOK;
  export import chainIOK = _ReaderTask.chainIOK;
  export import fromTaskK = _ReaderTask.fromTaskK;
  export import chainTaskK = _ReaderTask.chainTaskK;
  export import map = _ReaderTask.map;
  export import apW = _ReaderTask.apW;
  export import ap = _ReaderTask.ap;
  export import apFirst = _ReaderTask.apFirst;
  export import apSecond = _ReaderTask.apSecond;
  export import of = _ReaderTask.of;
  export import chainW = _ReaderTask.chainW;
  export import chain = _ReaderTask.chain;
  export import chainFirst = _ReaderTask.chainFirst;
  export import flatten = _ReaderTask.flatten;
  export import getSemigroup = _ReaderTask.getSemigroup;
  export import getMonoid = _ReaderTask.getMonoid;
  export import Functor = _ReaderTask.Functor;
  export import ApplicativePar = _ReaderTask.ApplicativePar;
  export import ApplicativeSeq = _ReaderTask.ApplicativeSeq;
  export import readerTask = _ReaderTask.readerTask;
  export import run = _ReaderTask.run;
  export import bindTo = _ReaderTask.bindTo;
  export import bindW = _ReaderTask.bindW;
  export import bind = _ReaderTask.bind;
  export import apSW = _ReaderTask.apSW;
  export import apS = _ReaderTask.apS;
}
