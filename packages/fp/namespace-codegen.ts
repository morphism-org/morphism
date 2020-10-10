/* eslint-disable */

import * as Path from "path";
import * as FileSystem from "fs";
import { pipe } from "fp-ts/pipeable";
import { exec } from "child_process";

namespace Arguments {
  export const determineModuleNames = (): string[] =>
    process.argv.slice(2).length
      ? process.argv.slice(2)
      : FileSystem.readdirSync("./src")
          .filter((fileName) => !fileName.includes("spec"))
          .filter((fileName) => !fileToIgnore.includes(fileName))
          .map((fileName) => fileName.substring(0, fileName.lastIndexOf(".")));
}

namespace File {
  /** Locate corresponding fp-ts file in node_modules and return its contents */
  export const readFPTSFile = (moduleName: string): string[] => {
    const file = Path.resolve(
      __dirname,
      `../../node_modules/fp-ts/lib/${moduleName}.d.ts`
    );

    return FileSystem.readFileSync(file, "utf8")
      .toString()
      .split("\n")
      .filter((line) => !line.includes("*") && !line.includes("import"));
  };

  export const readSourceFileParts = (moduleName: string, flag: string) => {
    const sourceContents = FileSystem.readFileSync(
      Path.resolve(__dirname, `src/${moduleName}.ts`),
      "utf8"
    ).toString();

    if (!sourceContents.includes(flag))
      throw new Error(`Source src/${moduleName}.ts is missing ${flag}.`);

    return [
      sourceContents.substring(0, sourceContents.indexOf(flag) + flag.length),
      sourceContents.substring(sourceContents.lastIndexOf(flag)),
    ];
  };

  export const writeSourceFile = (moduleName: string, fileContents: string) => {
    FileSystem.writeFileSync(
      Path.resolve(__dirname, `src/${moduleName}.ts`),
      fileContents
    );
  };
}

namespace ExportStatements {
  export const buildAll = (moduleName: string, lines: string[]) =>
    pipe(
      findAllFunctions(lines).reduce((mapping, statement) => {
        const functionName = parseFunctionName(statement);
        if (functionName && !mapping.has(functionName)) {
          mapping.set(
            functionName,
            `export import ${functionName} = _${moduleName}.${functionName}`
          );
        }

        return mapping;
      }, new Map<string, string>()),
      (mapping) => Array.from(mapping.values()),
      (exports) => exports.join("\n  ")
    );

  const findAllFunctions = (lines: string[]) => {
    const allDeclarations: string[] = [];

    lines.reduce((declaration: string | null, line: string) => {
      if (!declaration) {
        declaration = line;
      } else if (line.includes("export")) {
        allDeclarations.push(declaration);
        declaration = line;
      } else {
        declaration += line;
      }

      return declaration;
    }, null);

    return removeAmbientDeclarations(allDeclarations);
  };

  const removeAmbientDeclarations = (declarations: string[]) =>
    declarations.filter(
      (statement) =>
        !statement.includes("interface") && !statement.includes("type")
    );

  const parseFunctionName = (declaration: string): string | undefined => {
    const formattedDeclaration = declaration
      .replace("export", "")
      .replace("declare", "")
      .replace("function", "")
      .replace("const", "")
      .trim();

    const indexes = [
      formattedDeclaration.indexOf("<"),
      formattedDeclaration.indexOf(":"),
      formattedDeclaration.indexOf("("),
    ].filter((x) => x !== -1);

    if (indexes.length === 0) return undefined;

    const earliestIndex = Math.min(...indexes);

    return formattedDeclaration.substring(0, earliestIndex);
  };
}

const fileToIgnore = ["index.ts", "JSON.ts", "Exception.ts", "Runtime.ts"];

const CODEGEN_COMMENT = "/* CODEGEN :: FP-TS RE-EXPORTS */";

Arguments.determineModuleNames().forEach((moduleName) => {
  const exportStatements = ExportStatements.buildAll(
    moduleName,
    File.readFPTSFile(moduleName)
  );

  const [prefix, suffix] = File.readSourceFileParts(
    moduleName,
    CODEGEN_COMMENT
  );

  const updatedFileContents = [prefix, exportStatements, suffix].join("\n  ");

  // Update source file w/ new exports
  File.writeSourceFile(moduleName, updatedFileContents);

  // Format the updated source file
  exec(`prettier --write src/${moduleName}.ts`);

  console.log(`Updated src/${moduleName}.ts`);
});
