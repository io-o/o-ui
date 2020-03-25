<template>
  <div :class="messageStyle">
    {{text}}
  </div>
</template>

<script>
export default {
  name: 'OMessage',
  
  props: {
    text: {
      default: '',
      type: String
    },

    type: {
      default: "success",
      type: String,
      validator: (value) => {
        return ['success', 'info', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  },

  data() {
    return {
      messageStyle: ['message']
    }
  },

  mounted() {
    if (this.type) {
      this.messageStyle.push(`o-${this.type}`)
      setTimeout(() => {this.messageStyle.push("show")}, 0)
      setTimeout(() => {
        this.close()
      }, 3000)
    }
  },

  methods: {
    close() {
      const index = this.messageStyle.findIndex((item) => item === "show")
      this.messageStyle.splice(index, 1)
      setTimeout(() => {
        this.$el.remove()
        this.$destroy()
      }, 400)
    }
  }

}
</script>

<style lang="stylus" scoped>
.message
  position fixed
  left 50%
  top 50%
  display flex
  align-items center
  transform translate(-50%, -50px)
  padding 10px 16px
  font-size 14px
  color #fff
  border-radius 4px
  opacity 0
  z-index 999
  transition all .3s ease-in-out
  &.show
    transform translate(-50%, 10px)
    opacity 1
  &.o-success
    background-color #67C23A
  &.o-warning
    background-color #E6A23C
  &.o-info
    background-color #909399
  &.o-danger
    background-color #F56C6C
</style>