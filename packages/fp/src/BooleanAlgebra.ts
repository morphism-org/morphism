import * as _BooleanAlgebra from "fp-ts/lib/BooleanAlgebra";

export type BooleanAlgebra<A> = _BooleanAlgebra.BooleanAlgebra<A>;

export namespace BooleanAlgebra {
  export import booleanAlgebraBoolean = _BooleanAlgebra.booleanAlgebraBoolean;
  export import booleanAlgebraVoid = _BooleanAlgebra.booleanAlgebraVoid;
  export import getFunctionBooleanAlgebra = _BooleanAlgebra.getFunctionBooleanAlgebra;
  export import getDualBooleanAlgebra = _BooleanAlgebra.getDualBooleanAlgebra;
}
