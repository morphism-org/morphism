/* eslint-disable */

import * as Path from "path";
import * as FileSystem from "fs";

const args = process.argv.slice(2);

console.log("Args: ", args);

const baseImportAlias = `Base${args[0]}`;

// Find file
const fptsFile = Path.resolve(
  __dirname,
  `../../node_modules/fp-ts/lib/${args[0]}.d.ts`
);

// Read file
const lines = FileSystem.readFileSync(fptsFile, "utf8")
  .toString()
  .split("\n")
  .filter((line) => !line.includes("*") && !line.includes("import"));

// Parse out each statement
const allStatements: string[] = [];
let statement = "";
lines.forEach((line) => {
  if (!statement) {
    statement = line;
  } else if (line.includes("export")) {
    allStatements.push(statement);
    statement = line;
  } else {
    statement += line;
  }
});

// Remove ambient statements
const statementsWithoutAmbientContext: string[] = allStatements.filter(
  (statement) => !statement.includes("interface") && !statement.includes("type")
);

const parseFunctionName = (statement: string): string | undefined => {
  const formattedStatement = statement
    .replace("export", "")
    .replace("declare", "")
    .replace("function", "")
    .replace("const", "")
    .trim();

  const indexes = [
    formattedStatement.indexOf("<"),
    formattedStatement.indexOf(":"),
    formattedStatement.indexOf("("),
  ].filter((x) => x !== -1);

  if (indexes.length === 0) return undefined;

  const earliestIndex = Math.min(...indexes);

  return formattedStatement.substring(0, earliestIndex);
};

// Build map of functionName to export statement
const fnNameToExportStatement = new Map<string, string>();
statementsWithoutAmbientContext.forEach((statement) => {
  const functionName = parseFunctionName(statement);

  if (functionName && !fnNameToExportStatement.has(functionName)) {
    fnNameToExportStatement.set(
      functionName,
      `export import ${functionName} = ${baseImportAlias}.${functionName}`
    );
  }
});

const output = Array.from(fnNameToExportStatement.values())
  .join("\n")
  .trim();

console.log(output);
