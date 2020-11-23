import * as _Show from "fp-ts/lib/Show";

export interface Show<A> {
  readonly show: (a: A) => string;
}

export namespace Show {
  export import showString = _Show.showString;
  export import showNumber = _Show.showNumber;
  export import showBoolean = _Show.showBoolean;
  export import getStructShow = _Show.getStructShow;
  export import getTupleShow = _Show.getTupleShow;
}
