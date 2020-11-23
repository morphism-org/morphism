import { Either, identity, pipe } from ".";

export const parse = (string: string): Either<Error, unknown> =>
  Either.parseJSON(string, onError);

export namespace Stringify {
  export const short = (json: unknown): Either<Error, string> =>
    Either.tryCatch(() => JSON.stringify(json), onError);

  export const pretty = (json: unknown): Either<Error, string> =>
    Either.tryCatch(() => JSON.stringify(json, undefined, 2), onError);

  export namespace Always {
    export const short = (json: unknown): string =>
      pipe(Stringify.short(json), Either.fold(defaultJSON, identity));

    export const pretty = (json: unknown): string =>
      pipe(Stringify.pretty(json), Either.fold(defaultJSON, identity));

    const defaultJSON = (): string => "{}";
  }
}

const onError = (error: unknown): Error =>
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  Error(`Unrepresentable JSON value...\n\n${error}`);
