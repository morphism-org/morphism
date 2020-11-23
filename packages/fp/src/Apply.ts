import * as _Apply from "fp-ts/lib/Apply";

export type Apply<F> = _Apply.Apply<F>;

export namespace Apply {
  export import sequenceT = _Apply.sequenceT;
  export import sequenceS = _Apply.sequenceS;
}
