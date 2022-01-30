import type {
  PiniaPlugin,
  StateTree
} from './types'
import type {
  App,
  Ref
} from 'vue'

export const piniaSymbol = (
  Symbol('pinia')
)

export interface Pinia {
  install: (app: App) => void

  /**
   * root state
   */
  state: Ref<Record<string, StateTree>>

  /**
   * Adds a store plugin to extend every store
   *
   * @param plugin - store plugin to add
   */
  use(plugin: PiniaPlugin): Pinia

  /**
   * Installed store plugins
   *
   * @internal
   */
  _p: PiniaPlugin[]

  /**
   * App linked to this Pinia instance
   *
   * @internal
   */
  _a: App

  /**
   * Effect scope the pinia is attached to
   *
   * @internal
   */
  // _e: EffectScope

  /**
   * Registry of stores used by this pinia.
   *
   * @internal
   */
  // _s: Map<string, StoreGeneric>

  /**
   * Added by `createTestingPinia()` to bypass `useStore(pinia)`.
   *
   * @internal
   */
  // _testing?: boolean
}
