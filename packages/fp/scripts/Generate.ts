import * as FileSystem from "fs";
import * as Path from "path";

import { flow } from "fp-ts/lib/function";
import { pipe } from "fp-ts/lib/pipeable";
import * as ReadonlyArray from "fp-ts/lib/ReadonlyArray";
import * as Option from "fp-ts/lib/Option";

type ModuleFormat = "cjs" | "esm";
// namespace ModuleFormat {
//   export const isInstance = (x: string): x is ModuleFormat =>
//     x === "cjs" || x === "esm";
// }
//
// const moduleFormat = (): ModuleFormat =>
//   pipe(
//     process.argv.slice(2),
//     ReadonlyArray.map((arg) => arg.toLowerCase()),
//     (args) =>
//       args && args.length > 0 && ModuleFormat.isInstance(args[0])
//         ? Either.right(args[0])
//         : Either.left(
//             Error("Invalid input - first argument should be esm or cjs.")
//           ),
//     Either.fold(
//       (error: Error): never => {
//         throw error;
//       },
//       (type: ModuleFormat) => type
//     )
//   );

const modulesPath = () =>
  Path.join(__dirname, "../../../node_modules/fp-ts/lib");
const outputPath = () => Path.join(__dirname, "../src/Generated.ts");

const shouldGenerate = (fileName: string): boolean =>
  fileName !== "index" && fileName.includes(".d.ts");

const generateCode = (
  moduleType: ModuleFormat,
  moduleName: string,
  moduleSource: string
): string[] => {
  const capitalized = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
  const reExport =
    moduleName === capitalized ? moduleName : `${moduleName} as ${capitalized}`;

  const subDir = moduleType === "esm" ? "es6" : "lib";
  const type = `export { ${reExport} } from "fp-ts/${subDir}/${moduleName}";`;
  const lines = [
    `import * as ${capitalized}_ from "fp-ts/${subDir}/${moduleName}";`,
    `exports.${capitalized} = ${capitalized}_;`,
    `declare module "./Generated" { export const ${capitalized}: typeof ${capitalized}_; }\n`,
  ];

  return moduleSource.match(
    new RegExp(`(type|interface) (${capitalized})( |<)`, "g")
  )
    ? [type, ...lines]
    : lines;
};

const main = () =>
  pipe(
    FileSystem.readdirSync(modulesPath()) as string[],
    ReadonlyArray.filterMap(
      flow(
        Option.fromPredicate(shouldGenerate),
        Option.map((fileName) =>
          generateCode(
            "cjs",
            fileName.replace(".d.ts", ""),
            FileSystem.readFileSync(`${modulesPath()}/${fileName}`).toString()
          )
        )
      )
    ),
    ReadonlyArray.flatten,
    (lines) => lines.join("\n"),
    (content) => FileSystem.writeFileSync(outputPath(), content)
  );

main();
