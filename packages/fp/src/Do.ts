import * as Either from "fp-ts/lib/Either"
import * as TaskEither from "fp-ts/lib/TaskEither"
import { Do } from "fp-ts-contrib/lib/Do";

/**
 * This function provides a simulation of Haskell do notation. The `bind` / `bindL` functions
 * contribute to a threaded scope that is available to each subsequent step. The `do` / `doL`
 * functions can be used to perform computations that add nothing to the scope. The `done`
 * function returns the threaded scope that was built, while the `return` function provides
 * that threaded scope so that a custom value derived from the threaded scope can be returned.
 *
 * @example
 * const x = Result.Do()                    // Initiates do notation syntax
 *   .bind('a', 10)                         // Eagerly set 'a' to 10 in the context
 *   .bindL('b', () => 20)                  // Lazily set 'b' 20 in the context
 *   .bindL('c', ({ a, b }) => b + a)       // Lazily calculate 'c' from 'a' and 'b' in the context
 *   .return(({ c }) => `${c} dollars`)     // Return 'c' in a formatted string
 *
 * const y = pipe(
 *   x,
 *   Result.getOrElse(
 *     () => "No dollars"
 *   )
 * )
 *
 * assert.deepStrictEqual(y, `30 dollars`)
 *
 * All `do` operations mimic the execute-on-success/ignore-on-failure behavior that functions
 * like `Result.andThen` and `Result.map` exhibit. This is where the benefits of do notation
 * lie: it allows you to concisely describe a series of instructions by only concerning yourself
 * with what should happen in the successful scenario.  In the above example if any step of the
 * process failed, `y` would end up being set to "No dollars".
 */
export const forEither = Do(Either.either);

/**
 * This function provides a simulation of Haskell do notation. The `bind` / `bindL` functions
 * contribute to a threaded scope that is available to each subsequent step. The `do` / `doL`
 * functions can be used to perform computations that add nothing to the scope. The `done`
 * function returns the threaded scope that was built, while the `return` function provides
 * that threaded scope so that a custom value derived from the threaded scope can be returned.
 *
 * @example
 * const x = Result.Async.Do()              // Initiates do notation syntax
 *   .bind('a', 10)                         // Eagerly set 'a' to 10 in the context
 *   .bindL('b', () => 20)                  // Lazily set 'b' 20 in the context
 *   .bindL('c', ({ a, b }) => b + a)       // Lazily calculate 'c' from 'a' and 'b' in the context
 *   .return(({ c }) => `${c} dollars`)     // Return 'c' in a formatted string
 *
 * const y = pipe(
 *   x,
 *   Result.Async.getOrElse(
 *     () => "No dollars"
 *   )
 * )
 *
 * assert.deepStrictEqual(y, `30 dollars`)
 *
 * All `do` operations mimic the execute-on-success/ignore-on-failure behavior that functions
 * like `Result.Async.andThen` and `Result.Async.map` exhibit. This is where the benefits of
 * do notation lie: it allows you to concisely describe a series of instructions by only
 * concerning yourself with what should happen in the happy path.  In the above example if
 * any step of the process failed, `y` would end up being set to "No dollars".
 */
export const forTaskEither = Do(TaskEither.taskEither);
