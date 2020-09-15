import { IO } from "@morphism/fp";

import { v4 as uuidV4 } from "uuid";

export namespace Reference {
  export type Reference = { readonly id: ID.ID };
}

export namespace ID {
  export type ID = UUID.UUID | Unsafe.Unsafe;

  export namespace UUID {
    /** [RFC V4 UUID](https://tools.ietf.org/html/rfc4122) */
    export type UUID = string;
    export const uuid: IO.IO<string> = () => uuidV4();
  }

  export namespace Unsafe {
    export type Unsafe = string;
  }
}
