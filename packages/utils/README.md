# @morphism/utils

A re-export of `fp-ts-contrib` with some additional convenience functions/domains:
- `JSON`: an FP wrapper around the native `JSON.stringify` and `JSON.parse` methods
- `Do`: Haskell-inspired [do-notation](https://en.wikibooks.org/wiki/Haskell/do_notation) for `Either`, `TaskEither`, `Option`, and `Task`

<br/>

### Examples

#### `Do`

```typescript
const addTen = ({ a }:{ a: number }) => Either.right(a + 10)

const doNotation = Do.forEither()        // Initiates do notation context for `Either`
  .let('a', 10)                          // Set 'a' to 10 in the context
  .bindL('b', addTen)                    // Lazily passes in 'a' to 'addTen' & binds result to context under 'b'
  .return(({ a }) => `${a} dollars`)     // Returns a value derived from the context

const result = pipe(
  doNotation,
  Either.getOrElse(() => `0 dollars`)
)

expect(result).toEqual('20 dollars')
```

<br/>

#### `JSON`

Converting to JSON:
```typescript
import { Either } from "@morphism/fp";
import { JSON } from "@morphism/utils";

const short = pipe(
  { someField: "someValue" },
  JSON.Stringify.short,
  Either.fold(
    () => "{}",
    (json) => json 
  )
)

expect(short).toEqual('{ "someField": "someValue" }')
```

Converting to pretty JSON:
```typescript

const pretty = pipe(
  { someField: "someValue" },
  JSON.Stringify.pretty,
  Either.fold(
    () => "{}",
    (json) => json
  )
)

expect(pretty).toEqual('{\n  "someField": "someValue"\n}')

```

Converting to pretty JSON and never failing:
```typescript
const result = JSON.Stringify.Always.pretty({ someField: "someValue" })

expect(result).toEqual('{\n  "someField": "someValue"\n}')
```
