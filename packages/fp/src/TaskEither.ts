import { Do as doNotationFor } from "fp-ts-contrib/lib/Do";
import { Exception, Fn, TaskEither } from ".";

export * from "fp-ts/lib/TaskEither";

export type ErrorOr<A, L extends Error = Error> = TaskEither.TaskEither<L, A>;

const doNotation = () => doNotationFor(TaskEither.taskEither);
export { doNotation as do };

export const fromUnsafe = <A>(fn: Fn.Lazy<Promise<A>>): ErrorOr<A> =>
  TaskEither.tryCatch(fn, Exception.fromUnknown);
