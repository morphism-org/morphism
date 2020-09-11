import { Option } from ".";

import * as BaseNonEmptyArray from "fp-ts/lib/NonEmptyArray";

// eslint-disable-next-line functional/prefer-readonly-type
export type NonEmptyArray<A> = Array<A> & {
  readonly 0: A;
};

export namespace NonEmptyArray {
  export const fromReadonlyArray = <A>(
    as: readonly A[]
  ): Option<BaseNonEmptyArray.NonEmptyArray<A>> =>
    // eslint-disable-next-line functional/prefer-readonly-type
    BaseNonEmptyArray.fromArray(as as A[]);

  export import cons = BaseNonEmptyArray.cons;
  export import snoc = BaseNonEmptyArray.snoc;
  export import fromArray = BaseNonEmptyArray.fromArray;
  export import getShow = BaseNonEmptyArray.getShow;
  export import head = BaseNonEmptyArray.head;
  export import tail = BaseNonEmptyArray.tail;
  export import reverse = BaseNonEmptyArray.reverse;
  export import min = BaseNonEmptyArray.min;
  export import max = BaseNonEmptyArray.max;
  export import getSemigroup = BaseNonEmptyArray.getSemigroup;
  export import getEq = BaseNonEmptyArray.getEq;
  export import group = BaseNonEmptyArray.group;
  export import groupSort = BaseNonEmptyArray.groupSort;
  export import groupBy = BaseNonEmptyArray.groupBy;
  export import last = BaseNonEmptyArray.last;
  export import init = BaseNonEmptyArray.init;
  export import sort = BaseNonEmptyArray.sort;
  export import insertAt = BaseNonEmptyArray.insertAt;
  export import updateAt = BaseNonEmptyArray.updateAt;
  export import modifyAt = BaseNonEmptyArray.modifyAt;
  export import copy = BaseNonEmptyArray.copy;
  export import filter = BaseNonEmptyArray.filter;
  export import filterWithIndex = BaseNonEmptyArray.filterWithIndex;
  export import of = BaseNonEmptyArray.of;
  export import concat = BaseNonEmptyArray.concat;
  export import fold = BaseNonEmptyArray.fold;
  export import zipWith = BaseNonEmptyArray.zipWith;
  export import zip = BaseNonEmptyArray.zip;
  export import unzip = BaseNonEmptyArray.unzip;
  export import foldMapWithIndex = BaseNonEmptyArray.foldMapWithIndex;
  export import foldMap = BaseNonEmptyArray.foldMap;
  export import alt = BaseNonEmptyArray.alt;
  export import ap = BaseNonEmptyArray.ap;
  export import apFirst = BaseNonEmptyArray.apFirst;
  export import apSecond = BaseNonEmptyArray.apSecond;
  export import chain = BaseNonEmptyArray.chain;
  export import chainFirst = BaseNonEmptyArray.chainFirst;
  export import duplicate = BaseNonEmptyArray.duplicate;
  export import extend = BaseNonEmptyArray.extend;
  export import flatten = BaseNonEmptyArray.flatten;
  export import map = BaseNonEmptyArray.map;
  export import mapWithIndex = BaseNonEmptyArray.mapWithIndex;
  export import reduce = BaseNonEmptyArray.reduce;
  export import reduceWithIndex = BaseNonEmptyArray.reduceWithIndex;
  export import reduceRight = BaseNonEmptyArray.reduceRight;
  export import reduceRightWithIndex = BaseNonEmptyArray.reduceRightWithIndex;
  export import traverse = BaseNonEmptyArray.traverse;
  export import sequence = BaseNonEmptyArray.sequence;
  export import traverseWithIndex = BaseNonEmptyArray.traverseWithIndex;
  export import extract = BaseNonEmptyArray.extract;
  export import Functor = BaseNonEmptyArray.Functor;
  export import FunctorWithIndex = BaseNonEmptyArray.FunctorWithIndex;
  export import Applicative = BaseNonEmptyArray.Applicative;
  export import Monad = BaseNonEmptyArray.Monad;
  export import Foldable = BaseNonEmptyArray.Foldable;
  export import FoldableWithIndex = BaseNonEmptyArray.FoldableWithIndex;
  export import Traversable = BaseNonEmptyArray.Traversable;
  export import TraversableWithIndex = BaseNonEmptyArray.TraversableWithIndex;
  export import Alt = BaseNonEmptyArray.Alt;
  export import Comonad = BaseNonEmptyArray.Comonad;
  export import nonEmptyArray = BaseNonEmptyArray.nonEmptyArray;
  export import bindTo = BaseNonEmptyArray.bindTo;
  export import bind = BaseNonEmptyArray.bind;
}
