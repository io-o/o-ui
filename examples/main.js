import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import OMessage from  './message'

import oSplitePane from '../packages/o-splite-pane'

Vue.use(oSplitePane)
Vue.use(OMessage)

// 引入整体组件
import '../packages/index'

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount("#app")
