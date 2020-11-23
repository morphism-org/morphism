import * as _Choice from "fp-ts/lib/Choice";

export type Choice<F> = _Choice.Choice<F>;

export namespace Choice {
  export import splitChoice = _Choice.splitChoice;
  export import fanin = _Choice.fanin;
}
