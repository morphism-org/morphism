import * as _Field from "fp-ts/lib/Field";

export type Field<A> = _Field.Field<A>;

export namespace Field {
  export import fieldNumber = _Field.fieldNumber;
  export import gcd = _Field.gcd;
  export import lcm = _Field.lcm;
}
