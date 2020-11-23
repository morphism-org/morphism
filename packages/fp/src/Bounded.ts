import * as _Bounded from "fp-ts/lib/Bounded";

export type Bounded<A> = _Bounded.Bounded<A>;

export namespace Bounded {
  export import boundedNumber = _Bounded.boundedNumber;
}
