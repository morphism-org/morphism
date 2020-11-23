import * as _Strong from "fp-ts/lib/Strong";

export type Strong<F> = _Strong.Strong<F>;

export namespace Strong {
  export import splitStrong = _Strong.splitStrong;
  export import fanout = _Strong.fanout;
}
