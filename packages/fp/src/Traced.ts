import * as _Traced from "fp-ts/lib/Traced";

export interface Traced<P, A> {
  (p: P): A;
}

export namespace Traced {
  export import tracks = _Traced.tracks;
  export import listen = _Traced.listen;
  export import listens = _Traced.listens;
  export import censor = _Traced.censor;
  export import getComonad = _Traced.getComonad;
  export import map = _Traced.map;
  export import Functor = _Traced.Functor;
  export import traced = _Traced.traced;
}
