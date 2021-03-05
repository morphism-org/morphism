# @morphism

Functional programming monorepo aimed at improving the developer 
experience around `fp-ts` and associated libraries.

<br/>


### @morphism/fp

A faithful re-export of `fp-ts` that uses declaration merging to 
allow access to both a type, _and_ all methods on that type,
using only a single import statement.

For example, here is a common pattern:
```typescript
import { TaskEither } from "fp-ts/lib/TaskEither"
import * as TE from "fp-ts/lib/TaskEither"

const output = (input: TaskEither<Error, string>) => pipe(
  input,
  TE.map((s: string) => ...)
)
```

With declaration merging, that code can be rewritten as:
```typescript
import { TaskEither } from "@morphism/fp"

const output = (input: TaskEither<Error, string>) => pipe(
  input,
  TaskEither.map((s: string) => ...)
)
```

<br/>

### @morphism/runtime

A combination of `io-ts` and `io-ts-types`, exported under 
the `Runtime` namespace, that acts as an all-in-one input/output
validation library.

<br/>

### @morphism/utils

A re-export of `fp-ts-contrib` with some additional convenience functions/domains:
- `JSON`: an FP wrapper around the native `JSON.stringify` and `JSON.parse` methods
- `Do`: Haskell-inspired [do-notation](https://en.wikibooks.org/wiki/Haskell/do_notation) for `Either`, `TaskEither`, `Option`, and `Task`
