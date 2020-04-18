<template>
  <button 
    :class="['button', type, { round, disabled }]"
    @click="handleClick"
    :disabled="disabled">
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
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
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
/* 变量 */
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
  &.disabled
    &, &:focus, &:hover
      color #c0c4cc
      cursor not-allowed
      border-color #ebeef5
.primary
  primary()
  &:focus, &:hover
    background #66b1ff
    color #fff
.success
  success()

/*圆角*/

.round
  border-radius 20px
  padding 12px 23px
</style>