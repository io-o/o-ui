<template>
  <div
    class="o-footer"
    :style="heightStyle"
  >
    <slot />
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'OFooter',
  props: {
    height: {
      type: Number,
      default: 60,
    },
  },

  computed: {
    heightStyle() {
      let res = {}
      res.height = `${this.height}px`
      return res
    },
  },
}
</script>
