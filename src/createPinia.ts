import { piniaSymbol } from './rootStore'
import type { PiniaPlugin } from './types'
import type { Pinia } from './rootStore'
import type { App } from 'vue'

const _p: Pinia['_p'] = []
// plugins added before calling app.use(pinia)
let toBeInstalled: PiniaPlugin[] = []

export function createPinia() {
  const pinia: Pinia = {
    install(app: App) {
      this._a = app
      app.provide(piniaSymbol, this)
      app.config.globalProperties.$pinia = this

      // 使用插件
      toBeInstalled.forEach(plugin => this._p.push(plugin))
      toBeInstalled = []
    },
    use(plugin: PiniaPlugin) {
      this._p.push(plugin)
      return this
    },
    _p,
    // @ts-expect-error
    _a: null
  }

  return pinia
}
