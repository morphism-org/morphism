import { Either } from "./Either";

export { Either } from "./Either";
export * as Exception from "./Exception";
export * as JSON from "./JSON";
export * as NonEmptyArray from "./NonEmptyArray";
export * as Option from "./Option";
export * as Runtime from "./Runtime";
export * as TaskEither from "./TaskEither";
export * as These from "./These";

const x = Either.do()
  .bind("", () => {})
  .done();

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
  io as IO,
  ioEither as IOEither,
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
  ordering as Ordering,
  pipeable,
  profunctor as Profunctor,
  random as Random,
  reader as Reader,
  readerEither as ReaderEither,
  readerT as ReaderT,
  readerTask as ReaderTask,
  readerTaskEither as ReaderTaskEither,
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
  task as Task,
  taskThese as TaskThese,
  theseT as TheseT,
  traced as Traced,
  traversable as Traversable,
  traversableWithIndex as TraversableWithIndex,
  tree as Tree,
  tuple as Tuple,
  unfoldable as Unfoldable,
  validationT as ValidationT,
  witherable as Witherable,
  writer as Writer,
  writerT as WriterT,
} from "fp-ts";

export declare const hole: <A>() => A;

declare const console: any;
export const spy = <A>(a: A): A => void console.log(a) ?? a;

export const identity = <A>(a: A): A => a;
