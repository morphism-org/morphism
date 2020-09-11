import { Option } from ".";
import * as BaseThese from "fp-ts/lib/These";
import { Either } from "fp-ts/Either";
import { Both } from "fp-ts/These";

export declare type These<E, A> = Either<E, A> | Both<E, A>;

export namespace These {
  export const fromNullables = <A, B>(
    a?: Option.Nullable<A>,
    b?: Option.Nullable<B>
  ): Option<These<A, B>> =>
    These.fromOptions(Option.fromNullable(a), Option.fromNullable(b));

  export import left = BaseThese.left;
  export import right = BaseThese.right;
  export import both = BaseThese.both;
  export import fold = BaseThese.fold;
  export import swap = BaseThese.swap;
  export import getShow = BaseThese.getShow;
  export import getEq = BaseThese.getEq;
  export import getSemigroup = BaseThese.getSemigroup;
  export import getApplicative = BaseThese.getApplicative;
  export import getMonad = BaseThese.getMonad;
  export import toTuple = BaseThese.toTuple;
  export import getLeft = BaseThese.getLeft;
  export import getRight = BaseThese.getRight;
  export import isLeft = BaseThese.isLeft;
  export import isRight = BaseThese.isRight;
  export import isBoth = BaseThese.isBoth;
  export import leftOrBoth = BaseThese.leftOrBoth;
  export import rightOrBoth = BaseThese.rightOrBoth;
  export import getLeftOnly = BaseThese.getLeftOnly;
  export import getRightOnly = BaseThese.getRightOnly;
  export import fromOptions = BaseThese.fromOptions;
  export import bimap = BaseThese.bimap;
  export import mapLeft = BaseThese.mapLeft;
  export import map = BaseThese.map;
  export import reduce = BaseThese.reduce;
  export import foldMap = BaseThese.foldMap;
  export import reduceRight = BaseThese.reduceRight;
  export import traverse = BaseThese.traverse;
  export import sequence = BaseThese.sequence;
  export import Functor = BaseThese.Functor;
  export import Bifunctor = BaseThese.Bifunctor;
  export import Foldable = BaseThese.Foldable;
  export import Traversable = BaseThese.Traversable;
}
