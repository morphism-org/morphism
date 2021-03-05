import * as JSON from "./JSON";

export const fromUnknown = (nonErrorPrefix: string = "Unknown Error...") => (
  unknown?: unknown
): Error =>
  !(unknown instanceof Error)
    ? new Error(`${nonErrorPrefix}\n\n${JSON.Stringify.Always.pretty(unknown)}`)
    : unknown;
