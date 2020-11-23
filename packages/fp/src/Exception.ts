import { JSON } from ".";

export const fromUnknown = (unknown?: unknown | null | undefined): Error =>
  !(unknown instanceof Error)
    ? new Error(`Unknown error...\n${JSON.Stringify.Always.pretty(unknown)}`)
    : unknown;
