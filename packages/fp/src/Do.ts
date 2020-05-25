import * as Either from "fp-ts/lib/Either";
import * as TaskEither from "fp-ts/lib/TaskEither";
import { Do } from "fp-ts-contrib/lib/Do";

/**
 * This function provides a simulation of Haskell do notation. The `bind` / `bindL` functions
 * contribute to a threaded scope that is available to each subsequent step. The `do` / `doL`
 * functions can be used to perform computations that add nothing to the scope. The `done`
 * function returns the threaded scope that was built, while the `return` function provides
 * that threaded scope so that a custom value derived from the threaded scope can be returned.
 *
 * @example
 * const x = Either.do                      // Initiates do notation syntax
 *   .bind('a', 10)                         // Eagerly set 'a' to 10 in the context
 *   .bindL('b', () => 20)                  // Lazily set 'b' 20 in the context
 *   .bindL('c', ({ a, b }) => b + a)       // Lazily calculate 'c' from 'a' and 'b' in the context
 *   .return(({ c }) => `${c} dollars`)     // Return 'c' in a formatted string
 *
 * const y = pipe(
 *   x,
 *   Either.getOrElse(
 *     () => "No dollars"
 *   )
 * )
 *
 * assert.deepStrictEqual(y, `30 dollars`)
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
 * const x = TaskEither.do                  // Initiates do notation syntax
 *   .bind('a', 10)                         // Eagerly set 'a' to 10 in the context
 *   .bindL('b', () => 20)                  // Lazily set 'b' 20 in the context
 *   .bindL('c', ({ a, b }) => b + a)       // Lazily calculate 'c' from 'a' and 'b' in the context
 *   .return(({ c }) => `${c} dollars`)     // Return 'c' in a formatted string
 *
 * const y = pipe(
 *   x,
 *   TaskEither.getOrElse(
 *     () => "No dollars"
 *   )
 * )
 *
 * assert.deepStrictEqual(y, `30 dollars`)
 */
export const forTaskEither = Do(TaskEither.taskEither);
