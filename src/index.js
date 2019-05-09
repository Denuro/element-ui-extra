import ElMoney from './components/el-money'
import ElMask from './components/el-mask'

function install (Vue) {
  Vue.install('el-money', ElMoney)
  Vue.install('el-mask', ElMask)
}

export default install
export { ElMoney, ElMask }

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}
