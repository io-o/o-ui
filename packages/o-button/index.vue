<template>
  <button 
    :class="['button', type]"
    @click="handleClick">
    <slot>无按钮文字</slot>
  </button>
</template>

<script>
export default {
  name: 'OButton',

  props: {
    type: {
      type: String,
      default: ''
    }
  },

  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="stylus" scoped>
$primary = #409eff
$success = #67c23a
primary()
  background-color $primary
  border-color $primary
  color #fff
success()
  background-color $success
  border-color $success
  color #fff
.button
  cursor pointer
  display inline-block
  line-height 1
  white-space nowrap
  text-align center
  font-weight 500
  padding 12px 20px
  border-radius 4px
  color #606266
  outline none
.primary
  primary()
.success
  success()
</style>