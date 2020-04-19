<template>
  <div id="app">
    <div class="header">
      <h1>组件-Button</h1>
      <o-button disabled >disabled</o-button>
      <o-button  type ="primary">按钮</o-button>
      <h1>组件-Dialog</h1>
      <o-button  @click="handelClick">dialog</o-button>
    </div>
    <div class="contaner">
      <component :is="components"></component>
      <o-dialog :visible.sync="visible"></o-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      components: '',
      visible: false
    }
  },

  methods: {
    handelClick () {
      this.visible = true
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
