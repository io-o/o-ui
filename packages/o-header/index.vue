<template>
  <div
    class="o-header"
    :style="heightStyle"
  >
    <slot />
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'OHeader',
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

<style lang="stylus"></style>
