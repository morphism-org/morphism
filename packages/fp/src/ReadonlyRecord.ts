import * as _ReadonlyRecord from "fp-ts/lib/ReadonlyRecord";

export type ReadonlyRecord<K extends string, T> = Readonly<Record<K, T>>;

export namespace ReadonlyRecord {
  export import fromRecord = _ReadonlyRecord.fromRecord;
  export import toRecord = _ReadonlyRecord.toRecord;
  export import getShow = _ReadonlyRecord.getShow;
  export import size = _ReadonlyRecord.size;
  export import isEmpty = _ReadonlyRecord.isEmpty;
  export import keys = _ReadonlyRecord.keys;
  export import collect = _ReadonlyRecord.collect;
  export import toReadonlyArray = _ReadonlyRecord.toReadonlyArray;
  export import toUnfoldable = _ReadonlyRecord.toUnfoldable;
  export import insertAt = _ReadonlyRecord.insertAt;
  export import hasOwnProperty = _ReadonlyRecord.hasOwnProperty;
  export import deleteAt = _ReadonlyRecord.deleteAt;
  export import updateAt = _ReadonlyRecord.updateAt;
  export import modifyAt = _ReadonlyRecord.modifyAt;
  export import pop = _ReadonlyRecord.pop;
  export import isSubrecord = _ReadonlyRecord.isSubrecord;
  export import getEq = _ReadonlyRecord.getEq;
  export import getMonoid = _ReadonlyRecord.getMonoid;
  export import lookup = _ReadonlyRecord.lookup;
  export import empty = _ReadonlyRecord.empty;
  export import mapWithIndex = _ReadonlyRecord.mapWithIndex;
  export import map = _ReadonlyRecord.map;
  export import reduceWithIndex = _ReadonlyRecord.reduceWithIndex;
  export import foldMapWithIndex = _ReadonlyRecord.foldMapWithIndex;
  export import reduceRightWithIndex = _ReadonlyRecord.reduceRightWithIndex;
  export import singleton = _ReadonlyRecord.singleton;
  export import traverseWithIndex = _ReadonlyRecord.traverseWithIndex;
  export import traverse = _ReadonlyRecord.traverse;
  export import sequence = _ReadonlyRecord.sequence;
  export import wither = _ReadonlyRecord.wither;
  export import wilt = _ReadonlyRecord.wilt;
  export import partitionMapWithIndex = _ReadonlyRecord.partitionMapWithIndex;
  export import partitionWithIndex = _ReadonlyRecord.partitionWithIndex;
  export import filterMapWithIndex = _ReadonlyRecord.filterMapWithIndex;
  export import filterWithIndex = _ReadonlyRecord.filterWithIndex;
  export import fromFoldable = _ReadonlyRecord.fromFoldable;
  export import fromFoldableMap = _ReadonlyRecord.fromFoldableMap;
  export import every = _ReadonlyRecord.every;
  export import some = _ReadonlyRecord.some;
  export import elem = _ReadonlyRecord.elem;
  export import filter = _ReadonlyRecord.filter;
  export import filterMap = _ReadonlyRecord.filterMap;
  export import partition = _ReadonlyRecord.partition;
  export import partitionMap = _ReadonlyRecord.partitionMap;
  export import reduce = _ReadonlyRecord.reduce;
  export import foldMap = _ReadonlyRecord.foldMap;
  export import reduceRight = _ReadonlyRecord.reduceRight;
  export import compact = _ReadonlyRecord.compact;
  export import separate = _ReadonlyRecord.separate;
  export import Functor = _ReadonlyRecord.Functor;
  export import FunctorWithIndex = _ReadonlyRecord.FunctorWithIndex;
  export import Foldable = _ReadonlyRecord.Foldable;
  export import FoldableWithIndex = _ReadonlyRecord.FoldableWithIndex;
  export import Compactable = _ReadonlyRecord.Compactable;
  export import Filterable = _ReadonlyRecord.Filterable;
  export import FilterableWithIndex = _ReadonlyRecord.FilterableWithIndex;
  export import Traversable = _ReadonlyRecord.Traversable;
  export import TraversableWithIndex = _ReadonlyRecord.TraversableWithIndex;
  export import Witherable = _ReadonlyRecord.Witherable;
  export import readonlyRecord = _ReadonlyRecord.readonlyRecord;
}
