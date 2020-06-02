import * as GraphQL from "graphql";
import { pipe } from "@morphism/fp";

// type BaseUnion = "";
// type AppendKey<Base, K> = K extends Base ? never : Base | K;
// type NewKey = AppendKey<BaseUnion, "some-key">
// type NextKey = AppendKey<NewKey, "some-key">

export type Schema<Config extends Config.Config> = {
  [TypeName in Config["typeNames"]]: Type.Type<
    TypeName,
    Config["fieldNames"][TypeName]
  >;
};

export namespace Config {
  export type Config = {
    typeNames: string;
    fieldNames: Record<string, string>;
  };
}

namespace Type {
  export type Type<Name extends string, FieldNames extends string> = {
    name: Name;
    fields: FieldNames;
  };

  export const create = <Name extends string, FieldNames extends string>(
    name: Name
  ) => (fields: FieldNames): Type<Name, FieldNames> => ({
    name,
    fields,
  });
}

export namespace Field {
  export type Field<Name extends string> = Name;

  export const create = <Name extends string>(name: Name): Field<Name> => name;
}

export namespace Name {
  export type Name = GraphQL.NameNode;

  export const create = (name: string): Name => ({
    kind: GraphQL.Kind.NAME,
    value: name,
  });
}

export const schema = (): Schema<{
  typeNames: never;
  fieldNames: {};
}> => ({});

export const object = <
  Name extends string,
  FieldName extends string,
  Previous extends Config.Config,
  Next extends Previous & {
    readonly typeNames: Name;
    readonly fields: FieldName[];
  }
>(
  name: Name
) => (...fields: FieldName[]) => (schema: Schema<Previous>): Schema<Next> => ({
  ...schema,
  [name]: fields,
});

export const field = Field.create;

const test = () =>
  pipe(
    schema(),
    object("Query")(
      field("string1" as const),
      field("string2" as const),
      field("string4" as const),
      field("string4" as const)
    )
  );

console.log(test());
