import * as _Writer from "fp-ts/lib/Writer";

export type Writer<W, A> = _Writer.Writer<W, A>;

export namespace Writer {
  export import tell = _Writer.tell;
  export import listen = _Writer.listen;
  export import pass = _Writer.pass;
  export import listens = _Writer.listens;
  export import censor = _Writer.censor;
  export import map = _Writer.map;
  export import getMonad = _Writer.getMonad;
  export import Functor = _Writer.Functor;
  export import writer = _Writer.writer;
  export import evalWriter = _Writer.evalWriter;
  export import execWriter = _Writer.execWriter;
  export import evaluate = _Writer.evaluate;
  export import execute = _Writer.execute;
}
