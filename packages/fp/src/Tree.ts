import * as _Tree from "fp-ts/lib/Tree";

export type Tree<A> = _Tree.Tree<A>;

export namespace Tree {
  export import make = _Tree.make;
  export import getShow = _Tree.getShow;
  export import getEq = _Tree.getEq;
  export import drawForest = _Tree.drawForest;
  export import drawTree = _Tree.drawTree;
  export import unfoldTree = _Tree.unfoldTree;
  export import unfoldForest = _Tree.unfoldForest;
  export import unfoldTreeM = _Tree.unfoldTreeM;
  export import unfoldForestM = _Tree.unfoldForestM;
  export import elem = _Tree.elem;
  export import fold = _Tree.fold;
  export import ap = _Tree.ap;
  export import apFirst = _Tree.apFirst;
  export import apSecond = _Tree.apSecond;
  export import chain = _Tree.chain;
  export import chainFirst = _Tree.chainFirst;
  export import extend = _Tree.extend;
  export import duplicate = _Tree.duplicate;
  export import flatten = _Tree.flatten;
  export import map = _Tree.map;
  export import reduce = _Tree.reduce;
  export import foldMap = _Tree.foldMap;
  export import reduceRight = _Tree.reduceRight;
  export import extract = _Tree.extract;
  export import traverse = _Tree.traverse;
  export import sequence = _Tree.sequence;
  export import of = _Tree.of;
  export import Functor = _Tree.Functor;
  export import Applicative = _Tree.Applicative;
  export import Monad = _Tree.Monad;
  export import Foldable = _Tree.Foldable;
  export import Traversable = _Tree.Traversable;
  export import Comonad = _Tree.Comonad;
  export import tree = _Tree.tree;
  export import bindTo = _Tree.bindTo;
  export import bind = _Tree.bind;
  export import apS = _Tree.apS;
}
