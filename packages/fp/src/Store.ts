import * as _Store from "fp-ts/lib/Store";

export interface Store<S, A> {
  readonly peek: (s: S) => A;
  readonly pos: S;
}

export namespace Store {
  export import seek = _Store.seek;
  export import seeks = _Store.seeks;
  export import peeks = _Store.peeks;
  export import experiment = _Store.experiment;
  export import extend = _Store.extend;
  export import extract = _Store.extract;
  export import duplicate = _Store.duplicate;
  export import map = _Store.map;
  export import Functor = _Store.Functor;
  export import Comonad = _Store.Comonad;
  export import store = _Store.store;
}
