import MaskFilter from './filter'
import ElMask from './component.vue'

function install(Vue) {
  Vue.component(ElMask.name, ElMask)
  Vue.filter('mask', MaskFilter)
}

export default install
export { ElMask, MaskFilter }

// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}
