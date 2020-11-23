import * as _BoundedDistributiveLattice from "fp-ts/lib/BoundedDistributiveLattice";

export type BoundedDistributiveLattice<
  A
> = _BoundedDistributiveLattice.BoundedDistributiveLattice<A>;

export namespace BoundedDistributiveLattice {
  export import getMinMaxBoundedDistributiveLattice = _BoundedDistributiveLattice.getMinMaxBoundedDistributiveLattice;
}
