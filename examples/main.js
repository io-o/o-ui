import Vue from "vue"
import App from "./App.vue"
import router from "./router"

import oSplitePane from '../packages/o-splite-pane'

Vue.use(oSplitePane)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount("#app")
