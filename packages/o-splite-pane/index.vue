<template>
  <div
    ref="outer"
    class="o-splite-pane"
  >
    <div 
      class="pane pane-left"
      :style="{width: getWidth}"
    >
      <slot name="left" />  
    </div>
    <div 
      class="pane-trigger"
      :style="{width: `${triggerWidth}px`, left: triggerLeft}"
      @mousedown="handelMousedown"
    />
    <div 
      class="pane pane-right"
      :style="{left: getWidth}"
    >
      <slot name="right" /> 
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'OSplitePane',
  props: {
    triggerWidth: {
      type: Number,
      default: 10,
    },
    min: {
      type: Number,
      default: 0.1,
    },
    max: {
      type: Number,
      default: 0.9,
    },
    offset: {
      type: Number,
      default: 0.5,
    },
  },
  data () {
    return {
      canMove: false,
    }
  },
  computed: {
    getWidth () {
      return `${this.offset * 100}%`
    },
    triggerLeft () {
      return `calc(${ this.offset * 100 }% - ${ this.triggerWidth  / 2 }px)`
    },
  },

  methods: {
    handelMousemove (e) {
      if (!this.canMove) return
      let outerReact = this.$refs.outer.getBoundingClientRect()
      let offsetP = (e.pageX - outerReact.left) / outerReact.width
      if (offsetP < this.min) offsetP = this.min
      if (offsetP > this.max) offsetP = this.max
      // 使用 .sync修饰符  emit监听 使用update
      this.$emit('update:offset', offsetP)
    },
    handelMouseup () {
      this.canMove = false
    },
    handelMousedown () {
      this.canMove = true
      document.addEventListener('mousemove', this.handelMousemove)
      document.addEventListener('mouseup', this.handelMouseup)
    },
  },
}
</script>

<style lang="stylus">
.o-splite-pane
  width 30vw
  height  25vh
  position relative
  .pane
    position absolute
    height  100%
    top 0
    &-left
      background palevioletred
    &-right
      bottom 0
      right 0
      background yellow
  .pane-trigger
    position absolute
    top 0
    height 100%
    background red
    z-index 99
</style>
