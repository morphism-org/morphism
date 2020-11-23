import * as _Semiring from "fp-ts/lib/Semiring";

export interface Semiring<A> {
  readonly add: (x: A, y: A) => A;
  readonly zero: A;
  readonly mul: (x: A, y: A) => A;
  readonly one: A;
}

export namespace Semiring {
  export import getFunctionSemiring = _Semiring.getFunctionSemiring;
}
