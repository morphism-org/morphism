import { Either, flow, identity, JSON, List, Option, pipe, IO } from ".";

export * from "io-ts";
export * from "fp-ts/lib/IO";

export type ToType<
  Definition extends (() => IO.Any) | IO.Any
> = Definition extends () => IO.Any
  ? IO.TypeOf<ReturnType<Definition>>
  : Definition extends IO.Any
  ? IO.TypeOf<Definition>
  : never;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const nullable = <Definition extends IO.Any>(definition: Definition) =>
  IO.union([definition, IO.null, IO.undefined]);

export const fromPredicate = <A>(
  name: string,
  predicate: (a: unknown) => a is A
): IO.Type<A> =>
  new IO.Type(
    name,
    predicate,
    (a, context) => (predicate(a) ? IO.success(a) : IO.failure(a, context)),
    identity
  );

export const decode = <Definition extends IO.Any, A extends ToType<Definition>>(
  definition: Definition
) => (value?: Option.Nullable<unknown>): Either.ErrorOr<A> =>
  pipe(
    definition.decode(value),
    Either.mapLeft(
      flow(List.filterMap(errorMessage), messages =>
        Error(messages.join("\n\n"))
      )
    )
  );

export const errorMessage = (
  error: IO.ValidationError
): Option.Option<string> =>
  pipe(
    List.head(error.context),
    Option.map(context => {
      const path = error.context
        .map(context => context.key)
        .filter(key => key.length > 0)
        .join(".");

      const expected = `Expecting \`${context.type.name}\` at \`${path}\``;
      const actual =
        error.value === undefined
          ? "undefined"
          : JSON.Stringify.Always.short(error.value);

      return `${expected}, but instead got \`${actual}\``;
    })
  );
