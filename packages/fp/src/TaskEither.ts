import { Exception, Fn, TaskEither } from ".";

export * from "fp-ts/lib/TaskEither";

export type ErrorOr<A, L extends Error = Error> = TaskEither.TaskEither<L, A>;

export const fromTry = <A>(fn: Fn.Lazy<Promise<A>>): ErrorOr<A> =>
  TaskEither.tryCatch(fn, Exception.fromUnknown);
