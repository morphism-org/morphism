/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Either, flow, JSON, Option, pipe, ReadonlyArray, Runtime } from ".";

import * as T from "io-ts";
import * as NumberFromString from "io-ts-types/lib/NumberFromString";
import * as IntFromString from "io-ts-types/lib/IntFromString";
import * as BooleanFromString from "io-ts-types/lib/BooleanFromString";
import * as NonEmptyString from "io-ts-types/lib/NonEmptyString";
import * as Date from "io-ts-types/lib/date";
import * as DateFromISOString from "io-ts-types/lib/DateFromISOString";
import * as DateFromUnixTime from "io-ts-types/lib/DateFromUnixTime";
import * as DateFromNumber from "io-ts-types/lib/DateFromNumber";
import * as RegularExpression from "io-ts-types/lib/regexp";
import * as UUID from "io-ts-types/lib/UUID";

export * from "io-ts";

export * from "io-ts-types/lib/withValidate";
export * from "io-ts-types/lib/withMessage";
export * from "io-ts-types/lib/withFallback";

export * from "io-ts-types/lib/nonEmptyArray";
export * from "io-ts-types/lib/setFromArray";

export * from "io-ts-types/lib/fromRefinement";
export * from "io-ts-types/lib/fromNullable";
export * from "io-ts-types/lib/mapOutput";

export * from "io-ts-types/lib/option";
export * from "io-ts-types/lib/optionFromNullable";
export * from "io-ts-types/lib/either";

/** @deprecated Use `literalNull` instead */
export declare const nullType: unknown;

/** @deprecated Use `bigInt` instead */
export declare const bigint: unknown;

/** @deprecated Use `int` instead */
export declare const Int: unknown;

/** @deprecated Use `function` instead */
export declare const Function: unknown;

export const never = () => T.never;

// eslint-disable-next-line no-shadow-restricted-names
export const undefined = () => T.undefined;
export const literalNull = () => T.null;
export { literalNull as null };

export const boolean = () => T.boolean;
export const string = () => T.string;

export const number = () => T.number;
export const bigInt = () => T.bigint;
export const int = () => T.Int;

const fn = () => T.Function;
export { fn as function };

export const unknownArray = () => T.UnknownArray;
export const unknownRecord = () => T.UnknownRecord;

export const numberFromString = () => NumberFromString.NumberFromString;
export const intFromString = () => IntFromString.IntFromString;
export const booleanFromString = () => BooleanFromString.BooleanFromString;
export const nonEmptyString = () => NonEmptyString.NonEmptyString;

export const date = () => Date.date;
export const dateFromISOString = () => DateFromISOString.DateFromISOString;
export const dateFromUnixTime = () => DateFromUnixTime.DateFromUnixTime;
export const dateFromNumber = () => DateFromNumber.DateFromNumber;

export const regularExpression = () => RegularExpression.regexp;
export const uuid = () => UUID.UUID;

export type ToType<
  A extends (() => Runtime.Any) | Runtime.Any
> = A extends () => Runtime.Any
  ? Runtime.TypeOf<ReturnType<A>>
  : A extends Runtime.Any
  ? Runtime.TypeOf<A>
  : never;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const nullable = <Definition extends Runtime.Any>(
  definition: Definition
) => Runtime.union([definition, Runtime.null(), Runtime.undefined()]);

export const decode = <A extends ToType<Runtime>, Runtime extends Runtime.Any>(
  runtime: Runtime
) => (value?: unknown | null | undefined): Either<Error, A> =>
  pipe(
    runtime.decode(value),
    Either.mapLeft(
      flow(ReadonlyArray.filterMap(errorMessage), (messages) =>
        Error(messages.join("\n"))
      )
    )
  );

export const errorMessage = (error: Runtime.ValidationError): Option<string> =>
  pipe(
    ReadonlyArray.head(error.context),
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
