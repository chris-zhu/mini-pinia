export type PiniaPlugin = (a?: any) => void

export type StateTree = Record<string | number | symbol, any>

export type StoreGeneric = any
// export type StoreGeneric = Store<
// string,
// StateTree,
// _GettersTree<StateTree>,
// _ActionsTree
// >

// export type Store<
//   Id extends string = string,
//   S extends StateTree = {},
//   G /* extends GettersTree<S> */ = {},
//   // has the actions without the context (this) for typings
//   A /* extends ActionsTree */ = {}
// > = _StoreWithState<Id, S, G, A> &
// UnwrapRef<S> &
// _StoreWithGetters<G> &
// // StoreWithActions<A> &
// (_ActionsTree extends A ? {} : A) &
// PiniaCustomProperties<Id, S, G, A> &
// PiniaCustomStateProperties<S>
