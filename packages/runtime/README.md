# @morphism/runtime

A combination of [io-ts](https://github.com/gcanti/io-ts) and [io-ts-types](https://github.com/gcanti/io-ts-types), exported under
a namespace called `Runtime`, that acts as an all-in-one input/output
validation library.

<br/>

### Examples

If we have an endpoint that accepts a payload of the following shape:
```typescript
{
  username: string;
  hoursWorked: string;
  isOvertime?: string;
  date: number
}
```
and, after parsing/validation, needs to be transformed to:
```typescript
{
  username: string;
  hoursWorked: number;
  isOvertime: boolean;
  date: Date
}
```
where 
- `username` is a required parameter that we want a special error message for 
- `isOvertime` is an optional argument we want to fill with a default value when
it isn't provided
- `date` is a UNIX epoch representing a `Date`
- `hoursWorked` is just some number

Then we could use `@morphism/runtime` to describe the above logic like so:
```typescript
import { Runtime } from "@morphism/runtime";

type Request = Runtime.ToType<typeof runtime>;
namespace Request {
  export const runtime = () =>
    Runtime.strict({
      username: Runtime.withMessage(
        Runtime.string(),
        () => 'Some special error message for just username'
      ),
      hoursWorked: Runtime.numberFromString(),
      isOvertime: Runtime.withFallback(Runtime.booleanFromString(), false),
      dateRange: Runtime.dateFromUnixTime(),
    });
}
```
`Request` now represents the shape our `Request.runtime` function validates,
and can be used like so:
```typescript
pipe(
  input,
  Request.runtime().decode,
  Either.fold(
    (errors: Runtime.Errors) => ...,
    (request: Request) => ...
  )
)
```
