import OMessage from "../packages/o-message"
import Vue from "vue"


export default {
  install() {
    Vue.prototype.$message = ({type = "success", text = ""}) => {
      createMessage(Vue, {type, text})
    }
  }
}

function createMessage(Vue, propsData) {
  const Constructor = Vue.extend(OMessage)
  const msg = new Constructor({propsData})
  msg.$mount()
  document.body.appendChild(msg.$el)
  return msg
}