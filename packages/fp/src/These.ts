import { Option } from ".";
import * as _These from "fp-ts/lib/These";
import { Either } from "fp-ts/Either";
import { Both } from "fp-ts/These";

export declare type These<E, A> = Either<E, A> | Both<E, A>;

export namespace These {
  export const fromNullables = <A, B>(
    a?: Option.Nullable<A>,
    b?: Option.Nullable<B>
  ): Option<These<A, B>> =>
    These.fromOptions(Option.fromNullable(a), Option.fromNullable(b));

  /* CODEGEN :: FP-TS RE-EXPORTS */
  export import left = _These.left;
  export import right = _These.right;
  export import both = _These.both;
  export import fold = _These.fold;
  export import swap = _These.swap;
  export import getShow = _These.getShow;
  export import getEq = _These.getEq;
  export import getSemigroup = _These.getSemigroup;
  export import getApplicative = _These.getApplicative;
  export import getMonad = _These.getMonad;
  export import toTuple = _These.toTuple;
  export import getLeft = _These.getLeft;
  export import getRight = _These.getRight;
  export import isLeft = _These.isLeft;
  export import isRight = _These.isRight;
  export import isBoth = _These.isBoth;
  export import leftOrBoth = _These.leftOrBoth;
  export import rightOrBoth = _These.rightOrBoth;
  export import getLeftOnly = _These.getLeftOnly;
  export import getRightOnly = _These.getRightOnly;
  export import fromOptions = _These.fromOptions;
  export import bimap = _These.bimap;
  export import mapLeft = _These.mapLeft;
  export import map = _These.map;
  export import reduce = _These.reduce;
  export import foldMap = _These.foldMap;
  export import reduceRight = _These.reduceRight;
  export import traverse = _These.traverse;
  export import sequence = _These.sequence;
  export import Functor = _These.Functor;
  export import Bifunctor = _These.Bifunctor;
  export import Foldable = _These.Foldable;
  export import Traversable = _These.Traversable;
  /* CODEGEN :: FP-TS RE-EXPORTS */
}
