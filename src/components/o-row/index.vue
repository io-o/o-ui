<template>
  <div
    class="o-row"
    :style="rowGutter"
  >
    <slot />
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    gutter: {
      type: Number,
      default: 0
    }
  },
  computed: {
    rowGutter() {
      if (this.gutter !== 0) {
        const res = {}
        res.marginLeft = `-${this.gutter / 2}px`
        res.marginRight = res.paddingLeft
        return res
      }
    }
  },

  created() {

  },

  methods: {

  },
}
</script>

<style lang="stylus">
</style>
