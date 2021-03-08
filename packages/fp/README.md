# @morphism/fp

A faithful re-export of [fp-ts](https://github.com/gcanti/fp-ts) that uses declaration merging to
allow access to both a type _and_ all methods on that type,
using only a single import statement.


### Examples

Here's an example using `TaskEither` from `fp-ts`:
```typescript
import { TaskEither } from "fp-ts/lib/TaskEither"
import * as TE from "fp-ts/lib/TaskEither"

const instance: TaskEither<E, A> = ...

pipe(
  instance,
  TE.chain(...),
  TE.map(...),
  TE.fold(
    (e: E) => ...,
    (a: A) => ...
  )
)
```

The equivalent using `TaskEither` from `@morphism/fp`:
```typescript
import { TaskEither } from "@morphism/fp"

const instance: TaskEither<E, A> = ...

pipe(
  instance,
  TaskEither.chain(...),
  TaskEither.map(...),
  TaskEither.fold(
    (e: E) => ...,
    (a: A) => ...
  )
)
```

<br/>

Here's another example using `Either` from `fp-ts`:
```typescript
import { Either } from "fp-ts/lib/Either"
import * as E from "fp-ts/lib/Either"

const instance: Either<E, A> = ...

pipe(
  instance,
  E.chain(...),
  E.map(...),
  E.fold(
    (e: E) => ...,
    (a: A) => ...
  )
)
```

The equivalent using `Either` from `@morphism/fp`:

```typescript
import { Either } from "@morphism/fp"

const instance: Either<E, A> = ...

pipe(
  instance,
  Either.chain(...),
  Either.map(...),
  Either.fold(
    (e: E) => ...,
    (a: A) => ...
  )
)
```
