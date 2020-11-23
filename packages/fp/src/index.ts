export * as Exception from "./Exception";
export * as JSON from "./JSON";
export * as Runtime from "./Runtime";
export { Apply } from "./Apply";
export { BooleanAlgebra } from "./BooleanAlgebra";
export { Bounded } from "./Bounded";
export { BoundedDistributiveLattice } from "./BoundedDistributiveLattice";
export { ChainRec } from "./ChainRec";
export { Choice } from "./Choice";
export { Compactable } from "./Compactable";
export { Const } from "./Const";
export { DistributiveLattice } from "./DistributiveLattice";
export { Either } from "./Either";
export { EitherT } from "./EitherT";
export { Eq } from "./Eq";
export { Field } from "./Field";
export { Filterable } from "./Filterable";
export { Foldable } from "./Foldable";
export { FoldableWithIndex } from "./FoldableWithIndex";
export { Functor } from "./Functor";
export { FunctorWithIndex } from "./FunctorWithIndex";
export { IO } from "./IO";
export { IOEither } from "./IOEither";
export { Identity } from "./Identity";
export { Monoid } from "./Monoid";
export { NonEmptyArray } from "./NonEmptyArray";
export { Option } from "./Option";
export { OptionT } from "./OptionT";
export { Ord } from "./Ord";
export { Ordering } from "./Ordering";
export { Reader } from "./Reader";
export { ReaderEither } from "./ReaderEither";
export { ReaderT } from "./ReaderT";
export { ReaderTask } from "./ReaderTask";
export { ReaderTaskEither } from "./ReaderTaskEither";
export { ReadonlyNonEmptyArray } from "./ReadonlyNonEmptyArray";
export { ReadonlyRecord } from "./ReadonlyRecord";
export { Ring } from "./Ring";
export { Semigroup } from "./Semigroup";
export { Semiring } from "./Semiring";
export { Show } from "./Show";
export { State } from "./State";
export { StateReaderTaskEither } from "./StateReaderTaskEither";
export { StateT } from "./StateT";
export { Store } from "./Store";
export { Strong } from "./Strong";
export { Task } from "./Task";
export { TaskEither } from "./TaskEither";
export { TaskThese } from "./TaskThese";
export { These } from "./These";
export { TheseT } from "./TheseT";
export { Traced } from "./Traced";
export { Traversable } from "./Traversable";
export { Tree } from "./Tree";
export { ValidationT } from "./ValidationT";
export { Writer } from "./Writer";
export { WriterT } from "./WriterT";

export { pipe } from "fp-ts/lib/pipeable";
export { flow } from "fp-ts/lib/function";

export {
  alt as Alt,
  alternative as Alternative,
  applicative as Applicative,
  array as Array,
  bifunctor as Bifunctor,
  boolean as Boolean,
  boundedJoinSemilattice as BoundedJoinSemilattice,
  boundedLattice as BoundedLattice,
  boundedMeetSemilattice as BoundedMeetSemilattice,
  category as Category,
  chain as Chain,
  comonad as Comonad,
  console as Console,
  contravariant as Contravariant,
  date as Date,
  extend as Extend,
  filterableWithIndex as FilterableWithIndex,
  function as Fn,
  group as Group,
  heytingAlgebra as HeytingAlgebra,
  hkt as HKT,
  invariant as Invariant,
  ioRef as IORef,
  joinSemilattice as JoinSemilattice,
  lattice as Lattice,
  magma as Magma,
  map as Map,
  meetSemilattice as MeetSemilattice,
  monad as Monad,
  monadIO as MonadIO,
  monadTask as MonadTask,
  monadThrow as MonadThrow,
  pipeable,
  profunctor as Profunctor,
  random as Random,
  readonlyArray as ReadonlyArray,
  readonlyMap as ReadonlyMap,
  readonlySet as ReadonlySet,
  readonlyTuple as ReadonlyTuple,
  record as Record,
  semigroupoid as Semigroupoid,
  set as Set,
  traversableWithIndex as TraversableWithIndex,
  tuple as Tuple,
  unfoldable as Unfoldable,
  witherable as Witherable,
} from "fp-ts";

export declare const hole: <A>() => A;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const console: any;

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
export const spy = <A>(a: A): A => void console.log(a) ?? a;

export const identity = <A>(a: A): A => a;
