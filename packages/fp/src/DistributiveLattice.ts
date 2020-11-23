import * as _DistributiveLattice from "fp-ts/lib/DistributiveLattice";

export type DistributiveLattice<A> = _DistributiveLattice.DistributiveLattice<
  A
>;

export namespace DistributiveLattice {
  export import getMinMaxDistributiveLattice = _DistributiveLattice.getMinMaxDistributiveLattice;
}
