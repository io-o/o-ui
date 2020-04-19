<template>
<!-- 全屏遮罩 -->
  <div class="o-dialog__wrapper" v-show="visible">
    <div class="o-dialog">
      <div class="o-dialog__header">
        <span class="o-dialog__title">提示</span>
        <button
          @click="handleClose"
          class="o-dialog__button">
          x
        </button>
      </div>
      <div class="o-dialog__body">
        <slot></slot>
      </div>
      <div class="o-dialog__footer">
        <o-button>取消</o-button>
        <o-button type="primary">确认</o-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ODialog',

  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleClose() {
      // 使用update sync 触发父组件值自动更新
      this.$emit('update:visible', !this.visible)
    }
  }
}
</script>

<style lang="stylus" scoped>
.o-dialog__wrapper
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  overflow auto
  margin 0
  z-index 1001
  background rgba(0,0,0, .5)
  .o-dialog
    position relative
    margin 15vh auto 50px
    border-radius 2px
    background #fff
    width 35%
    box-shadow 0 1px 3px rgba(0,0,0, .3)
    box-sizing border-box
    &__header
      padding 20px 20px 10px
      .o-dialog__title
        line-height 24px
        font-size 18px
        color #303133
      .o-dialog__button
        position absolute
        top 20px
        right 20px
        background transparent
        border none 
        outline none 
        cursor pointer
        font-size 16px
    &__body
      padding 16px   
    &__footer
      padding 0 20px 20px 0
      display flex
      justify-content flex-end
      >:last-child
        margin-left 10px
</style>