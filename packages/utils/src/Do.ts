import { Either, TaskEither } from "@morphism/fp";
import { Do as DoNotation } from "fp-ts-contrib/lib/Do";
import { Option, Task } from "@morphism/fp/lib/Generated";

export namespace Do {
  /**
   * This function provides a simulation of Haskell do notation. The `bind` / `bindL` functions
   * contribute to a threaded scope that is available to each subsequent step. The `do` / `doL`
   * functions can be used to perform computations that add nothing to the scope. The `done`
   * function returns the threaded scope that was built, while the `return` function provides
   * that threaded scope so that a custom value derived from the threaded scope can be returned.
   *
   * @example
   * const addTen = ({ a }:{ a: number }) => Either.right(a + 10)
   *
   * const x = Do.forEither()                 // Initiates do notation syntax
   *   .let('a', 10)                          // Set 'a' to 10 in the context
   *   .bindL('b', addTen)                    // Lazily passes in 'a' to 'addTen' & binds result to context under 'b'
   *   .return(({ a }) => `${a} dollars`)     // Returns a value derived from the context
   *
   * const y = pipe(
   *   x,
   *   Either.getOrElse(
   *     () => "No dollars"
   *   )
   * )
   *
   * assert.deepStrictEqual(y, `20 dollars`)
   *
   * All `do` operations mimic the execute-on-success/ignore-on-failure behavior that functions
   * like `Either.chain` and `Either.map` exhibit. This is where the benefits of do notation
   * lie: it allows you to concisely describe a series of instructions by only concerning yourself
   * with what should happen in the successful scenario.  In the above example if any step of the
   * process failed, `y` would end up being set to "No dollars".
   */
  export const forEither = () => DoNotation(Either.either);

  /**
   * This function provides a simulation of Haskell do notation. The `bind` / `bindL` functions
   * contribute to a threaded scope that is available to each subsequent step. The `do` / `doL`
   * functions can be used to perform computations that add nothing to the scope. The `done`
   * function returns the threaded scope that was built, while the `return` function provides
   * that threaded scope so that a custom value derived from the threaded scope can be returned.
   *
   * @example
   * const addTen = ({ a }:{ a: number }) => TaskEither.right(a + 10)
   *
   * const x = Do.forTaskEither()             // Initiates do notation syntax
   *   .let('a', 10)                          // Eagerly set 'a' to 10 in the context
   *   .bindL('b', addTen)                    // Lazily passes in 'a' to 'addTen' & binds result to context under 'b'
   *   .return(({ a }) => `${a} dollars`)     // Returns a value derived from the context
   *
   * const y = pipe(
   *   x,
   *   TaskEither.getOrElse(
   *     () => "No dollars"
   *   )
   * )
   *
   * assert.deepStrictEqual(y, `20 dollars`)
   *
   * All operations on the `Do` instance mimic the execute-on-success/ignore-on-failure behavior that
   * functions like `TaskEither.chain` and `TaskEither.map` exhibit. This is where the benefits of
   * do notation lie: it allows you to concisely describe a series of instructions by only
   * concerning yourself with what should happen in the happy path.  In the above example if
   * any step of the process failed, `y` would end up being set to "No dollars".
   */
  export const forTaskEither = () => DoNotation(TaskEither.taskEither);

  /**
   * This function provides a simulation of Haskell do notation. The `bind` / `bindL` functions
   * contribute to a threaded scope that is available to each subsequent step. The `do` / `doL`
   * functions can be used to perform computations that add nothing to the scope. The `done`
   * function returns the threaded scope that was built, while the `return` function provides
   * that threaded scope so that a custom value derived from the threaded scope can be returned.
   *
   * @example
   * const x = Do.forTask()                       // Initiates do notation syntax
   *   .bind('a', Task.of(() => 'hello'))         // Eagerly set 'a' to 'hello' in the context
   *   .bindL('b', () => Task.of(() => 'world'))  // Lazily set 'b' to 'world'
   *   .return(({a, b}) => `${a} ${b}`)           // Returns a value derived from the context
   *
   * const y = await x()
   *
   * assert.deepStrictEqual(y, `hello world`)
   */
  export const forTask = () => DoNotation(Task.task);

  /**
   * This function provides a simulation of Haskell do notation. The `bind` / `bindL` functions
   * contribute to a threaded scope that is available to each subsequent step. The `do` / `doL`
   * functions can be used to perform computations that add nothing to the scope. The `done`
   * function returns the threaded scope that was built, while the `return` function provides
   * that threaded scope so that a custom value derived from the threaded scope can be returned.
   *
   * @example
   * const x = Do.forOption()                           // Initiates do notation syntax
   *   .bind("a", Option.some(10))                      // Eagerly set 'a' to 'hello' in the context
   *   .bind("b", Option.some(10))                      // Eagerly set 'b' to 'world' in the context
   *   .bindL("c", ({ a, b }) => Option.some(a + b))    // Lazily derived 'c' from the current context
   *   .return(({c}) => c)                              // Return 'c'
   *
   * const y = pipe(
   *   x,
   *   Option.fold(
   *     () => 0
   *   )
   * )
   *
   * assert.deepStrictEqual(y, 20)
   */
  export const forOption = () => DoNotation(Option.option);
}
