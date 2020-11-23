/* eslint-disable */

import * as Path from "path";
import * as FileSystem from "fs";
import { pipe } from "fp-ts/pipeable";
import { exec } from "child_process";

namespace FPTS {
  export const findAllLibraryFileNames = () => {
    const files = FileSystem.readdirSync("../../node_modules/fp-ts/lib/");

    return files.reduce((definitionFiles, currentFile) => {
      if (currentFile.includes(".d.ts")) definitionFiles.push(currentFile);
      return definitionFiles;
    }, [] as string[]);
  };

  export const readFile = (fileName: string) =>
    FileSystem.readFileSync(
      Path.resolve(__dirname, `../../node_modules/fp-ts/lib/${fileName}`),
      "utf8"
    );

  /** Locate corresponding fp-ts file in node_modules and return its contents */
  export const formatContents = (contents: string): string[] => {
    const comments = (line: string) => !line.includes("*");
    const imports = (line: string) => !line.includes("import");

    return contents.split("\n").filter(comments).filter(imports);
  };
}

namespace SourceFile {
  export const overwrite = (moduleName: string, fileContents: string) => {
    FileSystem.writeFileSync(
      Path.resolve(__dirname, `src/${moduleName}.ts`),
      fileContents
    );

    exec(`prettier --write src/${moduleName}.ts`);
  };
}

namespace FunctionStatements {
  export const fromFileContents = (lines: string[]): string[] => {
    const allDeclarations: string[] = [];

    let declaration: string | null = null;
    lines.forEach((line) => {
      if (!declaration) {
        declaration = line;
      } else if (line.includes("export")) {
        allDeclarations.push(declaration);
        declaration = line;
      } else {
        declaration += line;
      }
    });

    if (declaration && !allDeclarations.includes(declaration))
      allDeclarations.push(declaration);

    return removeAmbientDeclarations(allDeclarations);
  };

  const removeAmbientDeclarations = (declarations: string[]) =>
    declarations.filter(
      (statement) =>
        !statement.includes("interface") && !statement.includes("type")
    );
}

namespace ExportImportStatements {
  export const buildAll = (moduleName: string, functionStatements: string[]) =>
    pipe(
      functionStatements.reduce((mapping, statement) => {
        const functionName = extractFunctionName(statement);
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

  const extractFunctionName = (declaration: string): string | undefined => {
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

// TODO: Decide which re-export syntax provides the best experience
const typeDeclarationMapping: Record<string, string> = {
  Applicative: `export type Applicative<F> = _Applicative.Applicative<F>;`,
  Apply: `export type Apply<F> = _Apply.Apply<F>;`,
  BooleanAlgebra: `export type BooleanAlgebra<A> = _BooleanAlgebra.BooleanAlgebra<A>;`,
  Bounded: `export type Bounded<A> = _Bounded.Bounded<A>;`,
  BoundedDistributiveLattice: `export type BoundedDistributiveLattice<A> = _BoundedDistributiveLattice.BoundedDistributiveLattice<A>;`,
  ChainRec: `export type ChainRec<F> = _ChainRec.ChainRec<F>;`,
  Choice: `export type Choice<F> = _Choice.Choice<F>;`,
  Compactable: `export type Compactable<F> = _Compactable.Compactable<F>;`,
  Const: "export type Const<E, A> = _Const.Const<E, A>;",
  DistributiveLattice:
    "export type DistributiveLattice<A> = _DistributiveLattice.DistributiveLattice<A>;",
  Either: "export type Either<E, A> = _Either.Left<E> | _Either.Right<A>",
  EitherT: `export type EitherT<M, E, A> = _EitherT.EitherT<M, E, A>;`,
  Eq: `export interface Eq<A> { readonly equals: (x: A, y: A) => boolean };`,
  Field: `export type Field<A> = _Field.Field<A>;`,
  Filterable: `export type Filterable<F> = _Filterable.Filterable<F>;`,
  FilterableWithIndex: `export type FilterableWithIndex<F, I> = _FilterableWithIndex.FilterableWithIndex<F, I>;`,
  Foldable: `export type Foldable<F> = _Foldable.Foldable<F>`,
  FoldableWithIndex: `export type FoldableWithIndex<F, I> = _FoldableWithIndex.FoldableWithIndex<F, I>;`,
  Functor: `export type Functor<F> = _Functor.Functor<F>;`,
  FunctorWithIndex: `export type FunctorWithIndex<F, I> = _FunctorWithIndex.FunctorWithIndex<F, I>;`,
  IO: "export type IO<A> = () => A;",
  IOEither: `export type IOEither<E, A> = _IOEither.IOEither<E, A>;`,
  Identity: `export type Identity<A> = A;`,
  Monoid: `export type Monoid<A> = _Monoid.Monoid<A>;`,
  NonEmptyArray:
    "export type NonEmptyArray<A> = Array<A> & { readonly 0: A; };",
  Option: "export type Option<A> = _Option.None | _Option.Some<A>;",
  OptionT: `export type OptionT<M, A> = _OptionT.OptionT<M, A>;`,
  Ord: `export type Ord<A> = _Ord.Ord<A>;`,
  Ordering: "export type Ordering = -1 | 0 | 1;",
  Reader: "export type Reader<R, A> = _Reader.Reader<R, A>",
  ReaderEither: `export type ReaderEither<R, E, A> = _ReaderEither.ReaderEither<R, E ,A>`,
  ReaderT: `export type ReaderT<M, R, A> = _ReaderT.ReaderT<M,R,A>;`,
  ReaderTask: `export type ReaderTask<R, A> = _ReaderTask.ReaderTask<R, A>;`,
  ReaderTaskEither: `export type ReaderTaskEither<R, E, A> = _ReaderTaskEither.ReaderTaskEither<R,E,A>;`,
  ReadonlyNonEmptyArray: `export type ReadonlyNonEmptyArray<A> = _ReadonlyNonEmptyArray.ReadonlyNonEmptyArray<A>`,
  ReadonlyRecord: `export type ReadonlyRecord<K extends string, T> = Readonly<Record<K, T>>;`,
  Ring: `export type Ring<A> = _Ring.Ring<A>`,
  Semigroup: `export type Semigroup<A> = _Semigroup.Semigroup<A>;`,
  Semiring: `
    export interface Semiring<A> {
      readonly add: (x: A, y: A) => A
      readonly zero: A
      readonly mul: (x: A, y: A) => A
      readonly one: A
    }`,
  Show: `export interface Show<A> { readonly show: (a: A) => string }`,
  State: `export interface State<S, A> { (s: S): [A, S] }`,
  StateReaderTaskEither: `export type StateReaderTaskEither<S, R, E, A> = _StateReaderTaskEither.StateReaderTaskEither<S,R,E,A>;`,
  StateT: `export type StateT<M, S, A> = _StateT.StateT<M,S,A>;`,
  Store: `export interface Store<S, A> { readonly peek: (s: S) => A; readonly pos: S; }`,
  Strong: `export type Strong<F> = _Strong.Strong<F>;`,
  Task: "export type Task<A> = () => Promise<A>;",
  TaskEither: `export type TaskEither<E, A> = _TaskEither.TaskEither<E, A>;`,
  TaskThese: `export type TaskThese<E, A> = _TaskThese.TaskThese<E, A>;`,
  These: `export type These<E, A> = _These.These<E, A>;`,
  TheseT: `export type TheseT<M, E, A> = _TheseT.TheseT<M, E, A>;`,
  Traced: `export interface Traced<P, A> { (p: P): A }`,
  Traversable: `export type Traversable<T> = _Traversable.Traversable<T>;`,
  Tree: `export type Tree<A> = _Tree.Tree<A>;`,
  ValidationT: `export type ValidationT<M, E, A> = _ValidationT.ValidationT<M, E, A>;`,
  Writer: "export type Writer<W, A> = _Writer.Writer<W, A>",
  WriterT: "export type WriterT<M, W, A> = _WriterT.WriterT<M, W, A>;",
};

const doesFileRequireRedeclare = (moduleName: string, fileContents: string) => {
  const containsTypeMatchingDomain =
    fileContents.includes(`interface ${moduleName}`) ||
    fileContents.includes(`type ${moduleName}`);

  const containsFunctionDeclarations =
    fileContents.includes("declare function") ||
    fileContents.includes("declare const");

  return containsTypeMatchingDomain && containsFunctionDeclarations;
};

FPTS.findAllLibraryFileNames().forEach((fileName) => {
  const moduleName = fileName.substring(0, fileName.indexOf(".")); // Either, Task, etc.

  const fileContents = FPTS.readFile(fileName);

  if (doesFileRequireRedeclare(moduleName, fileContents)) {
    console.log(`[Codegen] Processing ${moduleName}`);
    const functionExportImportStatements = ExportImportStatements.buildAll(
      moduleName,
      FunctionStatements.fromFileContents(
        FPTS.formatContents(FPTS.readFile(fileName))
      )
    );

    const typeDeclaration = typeDeclarationMapping[moduleName];
    if (typeDeclaration === undefined) {
      console.error(
        `\n[Codegen] Error: No re-declare statement found for '${moduleName}'\n`
      );
      process.exit(1);
    }

    const sourceFileContents = `
      import * as _${moduleName} from "fp-ts/lib/${moduleName}";
      
      ${typeDeclaration}
      
      export namespace ${moduleName} {
        ${functionExportImportStatements}
      }
    `;

    SourceFile.overwrite(moduleName, sourceFileContents);
  }
});
