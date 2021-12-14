import * as FileSystem from "fs";
import * as Path from "path";

import { flow } from "fp-ts/lib/function";
import { pipe } from "fp-ts/lib/pipeable";
import * as ReadonlyArray from "fp-ts/lib/ReadonlyArray";
import * as Option from "fp-ts/lib/Option";

const modulesPath = () =>
  Path.join(__dirname, "../../../node_modules/fp-ts/es6");
const outputPath = () => Path.join(__dirname, "../src/Generated.ts");

const shouldGenerate = (fileName: string): boolean =>
  !fileName.includes("index") && fileName.includes(".d.ts")

const generateCode = (moduleName: string, moduleSource: string): string[] => {
  const capitalized = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
  const reExport =
    moduleName === capitalized ? moduleName : `${moduleName} as ${capitalized}`;

  const type = `export type { ${reExport} } from "fp-ts/es6/${moduleName}";`;
  const lines = [
    `import * as ${capitalized} from "fp-ts/es6/${moduleName}";`,
    `exports.${capitalized} = ${capitalized};`,
    '\n'
    // `declare module "./Generated" { export const ${capitalized}: typeof ${capitalized}_; }\n`,
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
