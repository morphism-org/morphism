import { Option } from ".";

import * as _NonEmptyArray from "fp-ts/lib/NonEmptyArray";

// eslint-disable-next-line functional/prefer-readonly-type
export type NonEmptyArray<A> = Array<A> & {
  readonly 0: A;
};

export namespace NonEmptyArray {
  export const fromReadonlyArray = <A>(
    as: readonly A[]
  ): Option<NonEmptyArray<A>> =>
    // eslint-disable-next-line functional/prefer-readonly-type
    _NonEmptyArray.fromArray(as as A[]);

  export import cons = _NonEmptyArray.cons;
  export import snoc = _NonEmptyArray.snoc;
  export import fromArray = _NonEmptyArray.fromArray;
  export import getShow = _NonEmptyArray.getShow;
  export import head = _NonEmptyArray.head;
  export import tail = _NonEmptyArray.tail;
  export import reverse = _NonEmptyArray.reverse;
  export import min = _NonEmptyArray.min;
  export import max = _NonEmptyArray.max;
  export import getSemigroup = _NonEmptyArray.getSemigroup;
  export import getEq = _NonEmptyArray.getEq;
  export import group = _NonEmptyArray.group;
  export import groupSort = _NonEmptyArray.groupSort;
  export import groupBy = _NonEmptyArray.groupBy;
  export import last = _NonEmptyArray.last;
  export import init = _NonEmptyArray.init;
  export import sort = _NonEmptyArray.sort;
  export import insertAt = _NonEmptyArray.insertAt;
  export import updateAt = _NonEmptyArray.updateAt;
  export import modifyAt = _NonEmptyArray.modifyAt;
  export import copy = _NonEmptyArray.copy;
  export import filter = _NonEmptyArray.filter;
  export import filterWithIndex = _NonEmptyArray.filterWithIndex;
  export import of = _NonEmptyArray.of;
  export import concat = _NonEmptyArray.concat;
  export import fold = _NonEmptyArray.fold;
  export import zipWith = _NonEmptyArray.zipWith;
  export import zip = _NonEmptyArray.zip;
  export import unzip = _NonEmptyArray.unzip;
  export import foldMapWithIndex = _NonEmptyArray.foldMapWithIndex;
  export import foldMap = _NonEmptyArray.foldMap;
  export import alt = _NonEmptyArray.alt;
  export import ap = _NonEmptyArray.ap;
  export import apFirst = _NonEmptyArray.apFirst;
  export import apSecond = _NonEmptyArray.apSecond;
  export import chain = _NonEmptyArray.chain;
  export import chainFirst = _NonEmptyArray.chainFirst;
  export import duplicate = _NonEmptyArray.duplicate;
  export import extend = _NonEmptyArray.extend;
  export import flatten = _NonEmptyArray.flatten;
  export import map = _NonEmptyArray.map;
  export import mapWithIndex = _NonEmptyArray.mapWithIndex;
  export import reduce = _NonEmptyArray.reduce;
  export import reduceWithIndex = _NonEmptyArray.reduceWithIndex;
  export import reduceRight = _NonEmptyArray.reduceRight;
  export import reduceRightWithIndex = _NonEmptyArray.reduceRightWithIndex;
  export import traverse = _NonEmptyArray.traverse;
  export import sequence = _NonEmptyArray.sequence;
  export import traverseWithIndex = _NonEmptyArray.traverseWithIndex;
  export import extract = _NonEmptyArray.extract;
  export import Functor = _NonEmptyArray.Functor;
  export import FunctorWithIndex = _NonEmptyArray.FunctorWithIndex;
  export import Applicative = _NonEmptyArray.Applicative;
  export import Monad = _NonEmptyArray.Monad;
  export import Foldable = _NonEmptyArray.Foldable;
  export import FoldableWithIndex = _NonEmptyArray.FoldableWithIndex;
  export import Traversable = _NonEmptyArray.Traversable;
  export import TraversableWithIndex = _NonEmptyArray.TraversableWithIndex;
  export import Alt = _NonEmptyArray.Alt;
  export import Comonad = _NonEmptyArray.Comonad;
  export import nonEmptyArray = _NonEmptyArray.nonEmptyArray;
  export import bindTo = _NonEmptyArray.bindTo;
  export import bind = _NonEmptyArray.bind;
}
