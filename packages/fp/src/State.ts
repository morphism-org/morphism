import * as _State from "fp-ts/lib/State";

export interface State<S, A> {
  (s: S): [A, S];
}

export namespace State {
  export import get = _State.get;
  export import put = _State.put;
  export import modify = _State.modify;
  export import gets = _State.gets;
  export import map = _State.map;
  export import ap = _State.ap;
  export import apFirst = _State.apFirst;
  export import apSecond = _State.apSecond;
  export import of = _State.of;
  export import chain = _State.chain;
  export import chainFirst = _State.chainFirst;
  export import flatten = _State.flatten;
  export import Functor = _State.Functor;
  export import Applicative = _State.Applicative;
  export import Monad = _State.Monad;
  export import state = _State.state;
  export import evalState = _State.evalState;
  export import execState = _State.execState;
  export import evaluate = _State.evaluate;
  export import execute = _State.execute;
  export import bindTo = _State.bindTo;
  export import bind = _State.bind;
  export import apS = _State.apS;
}
