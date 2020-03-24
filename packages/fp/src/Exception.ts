import { JSON, Option } from ".";

export const fromUnknown = (unknown?: Option.Nullable<unknown>): Error =>
  !(unknown instanceof Error)
    ? new Error(`Unknown error...\n\n${JSON.Stringify.Always.pretty(unknown)}`)
    : unknown;
