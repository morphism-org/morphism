import * as _Filterable from "fp-ts/lib/Filterable";

export type Filterable<F> = _Filterable.Filterable<F>;

export namespace Filterable {
  export import getFilterableComposition = _Filterable.getFilterableComposition;
}
