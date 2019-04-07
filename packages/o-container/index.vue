<template>
  <section :class="['o-container', { 'is-vertical': isVertical }]">
    <slot />
  </section>
</template>

<script type="text/javascript">
export default {
  name: 'OContainer',
  props: {
    direction: {
      type: String,
      default: "",
    },
  },
  computed: {
    isVertical() {
      if (this.direction === 'vertical') {
        return true
      } else if (this.direction === 'horizontal') {
        return false
      }
      return this.$slots && this.$slots.default
        ? this.$slots.default.some(vnode => {
          const tag = vnode.componentOptions && vnode.componentOptions.tag
          return tag === 'o-header' || tag === 'o-footer'
        })
        : false
    },
  },

  created() { },

  methods: {},
}
</script>

<style lang="stylus">
.o-container
  display flex
  flex 1
  flex-direction row
  flex-basis auto
  box-box-sizing border-box
  min-height  0
  &.is-vertical
    flex-direction column
</style>
