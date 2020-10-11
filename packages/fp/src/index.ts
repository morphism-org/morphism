export { Either } from "./Either";
export * as Exception from "./Exception";
export * as JSON from "./JSON";
export { NonEmptyArray } from "./NonEmptyArray";
export { Option } from "./Option";
export * as Runtime from "./Runtime";
export { These } from "./These";
export { Task } from "./Task";
export { TaskEither } from "./TaskEither";
export { TaskThese } from "./TaskThese";
export { IO } from "./IO";
export { IOEither } from "./IOEither";
export { Ordering } from "./Ordering";
export { Reader } from "./Reader";
export { ReaderEither } from "./ReaderEither";
export { ReaderTask } from "./ReaderTask";
export { ReaderTaskEither } from "./ReaderTaskEither";
export { Writer } from "./Writer";

export { pipe } from "fp-ts/lib/pipeable";
export { flow } from "fp-ts/lib/function";

export {
  alt as Alt,
  alternative as Alternative,
  applicative as Applicative,
  apply as Apply,
  array as Array,
  bifunctor as Bifunctor,
  boolean as Boolean,
  booleanAlgebra as BooleanAlgebra,
  bounded as Bounded,
  boundedDistributiveLattice as BoundedDistributiveLattice,
  boundedJoinSemilattice as BoundedJoinSemilattice,
  boundedLattice as BoundedLattice,
  boundedMeetSemilattice as BoundedMeetSemilattice,
  category as Category,
  chain as Chain,
  chainRec as ChainRec,
  choice as Choice,
  comonad as Comonad,
  compactable as Compactable,
  console as Console,
  const as Const,
  contravariant as Contravariant,
  date as Date,
  distributiveLattice as DistributiveLattice,
  eitherT as EitherT,
  eq as Eq,
  extend as Extend,
  field as Field,
  filterable as Filterable,
  filterableWithIndex as FilterableWithIndex,
  foldable as Foldable,
  foldableWithIndex as FoldableWithIndex,
  function as Fn,
  functor as Functor,
  functorWithIndex as FunctorWithIndex,
  group as Group,
  heytingAlgebra as HeytingAlgebra,
  hkt as HKT,
  identity as Identity,
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
  monoid as Monoid,
  optionT as OptionT,
  ord as Ord,
  pipeable,
  profunctor as Profunctor,
  random as Random,
  readerT as ReaderT,
  readonlyArray as ReadonlyArray,
  readonlyMap as ReadonlyMap,
  readonlyNonEmptyArray as ReadonlyNonEmptyArray,
  readonlyRecord as ReadonlyRecord,
  readonlySet as ReadonlySet,
  readonlyTuple as ReadonlyTuple,
  record as Record,
  ring as Ring,
  semigroup as Semigroup,
  semigroupoid as Semigroupoid,
  semiring as Semiring,
  set as Set,
  show as Show,
  state as State,
  stateReaderTaskEither as StateReaderTaskEither,
  stateT as StateT,
  store as Store,
  strong as Strong,
  theseT as TheseT,
  traced as Traced,
  traversable as Traversable,
  traversableWithIndex as TraversableWithIndex,
  tree as Tree,
  tuple as Tuple,
  unfoldable as Unfoldable,
  validationT as ValidationT,
  witherable as Witherable,
  writerT as WriterT,
} from "fp-ts";

export declare const hole: <A>() => A;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const console: any;

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
export const spy = <A>(a: A): A => void console.log(a) ?? a;

export const identity = <A>(a: A): A => a;
