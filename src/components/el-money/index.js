import ElMoney from './component'
import MoneyFilter from './filter'

function install (Vue) {
  Vue.component('el-money', ElMoney)
  Vue.filter('money', MoneyFilter)
}

export default install
export { ElMoney, MoneyFilter }

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}
