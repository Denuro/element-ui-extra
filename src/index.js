import ElMoney from './components/el-money/component'
import MoneyFilter from './components/el-money/filter'
import MoneyDirective from './components/el-money/directive'

import ElMask from './components/el-mask/component'
import MaskFilter from './components/el-mask/filter'
import MaskDirective from './components/el-mask/directive'

function install (Vue) {
  Vue.component('el-money', ElMoney)
  Vue.filter('money', MoneyFilter)
  Vue.component(ElMask.name, ElMask)
  Vue.filter('mask', MaskFilter)
}

export default install
export { ElMoney, MoneyFilter, MoneyDirective, ElMask, MaskFilter, MaskDirective }

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}
