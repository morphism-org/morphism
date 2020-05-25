import { Either, flow, JSON, List, Option, pipe, Runtime } from ".";

export * from "io-ts";

// HOCs to replace aspects of existing runtime types
export * from "io-ts-types/lib/withValidate";
export * from "io-ts-types/lib/withMessage";
export * from "io-ts-types/lib/withFallback";

// Runtime primitives
export * from "io-ts-types/lib/NumberFromString";
export * from "io-ts-types/lib/IntFromString";
export * from "io-ts-types/lib/BooleanFromString";
export * from "io-ts-types/lib/NonEmptyString";

// Runtime non-primitives
export * from "io-ts-types/lib/DateFromISOString";
export * from "io-ts-types/lib/DateFromUnixTime";
export * from "io-ts-types/lib/DateFromNumber";
export * from "io-ts-types/lib/regexp";
export * from "io-ts-types/lib/UUID";

// Runtime collections
export * from "io-ts-types/lib/nonEmptyArray";
export * from "io-ts-types/lib/setFromArray";

// Runtime helpers
export * from "io-ts-types/lib/fromRefinement";
export * from "io-ts-types/lib/fromNullable";
export * from "io-ts-types/lib/mapOutput";
export * from "io-ts-types/lib/clone";

// Runtime fp-ts types
export * from "io-ts-types/lib/option";
export * from "io-ts-types/lib/optionFromNullable";
export * from "io-ts-types/lib/either";

export type ToType<
  Definition extends (() => Runtime.Any) | Runtime.Any
> = Definition extends () => Runtime.Any
  ? Runtime.TypeOf<ReturnType<Definition>>
  : Definition extends Runtime.Any
  ? Runtime.TypeOf<Definition>
  : never;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const nullable = <Definition extends Runtime.Any>(
  definition: Definition
) => Runtime.union([definition, Runtime.null, Runtime.undefined]);

export const decode = <
  Definition extends Runtime.Any,
  A extends ToType<Definition>
>(
  definition: Definition
) => (value?: Option.Nullable<unknown>): Either.ErrorOr<A> =>
  pipe(
    definition.decode(value),
    Either.mapLeft(
      flow(List.filterMap(errorMessage), (messages) =>
        Error(messages.join("\n\n"))
      )
    )
  );

export const errorMessage = (
  error: Runtime.ValidationError
): Option.Option<string> =>
  pipe(
    List.head(error.context),
    Option.map((context) => {
      const path = error.context
        .map((context) => context.key)
        .filter((key) => key.length > 0)
        .join(".");

      const expected =
        `Expecting \`${context.type.name}\`` + (path ? ` at \`${path}\`` : ``);

      const actual =
        error.value === undefined
          ? "undefined"
          : JSON.Stringify.Always.short(error.value);

      return `${expected}, but instead got \`${actual}\``;
    })
  );
