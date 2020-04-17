<template>
  <div id="app">
    <div class="header">
      <h1>组件</h1>
      <o-button  type ="primary">按钮</o-button>
      <o-button  @click="handelClick('o-dialog')">dialog</o-button>
    </div>
    <div class="contaner">
      <component :is="components"></component>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      components: ''
    }
  },

  methods: {
    handelClick (com) {
      this.components = com
    }
  }
}
</script>



<style lang="stylus">
html,body
  margin  0
  padding 0
  width 100%
  min-height 100%
.header
  width 100%
  text-align center
</style>
