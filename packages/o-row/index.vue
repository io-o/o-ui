<template>
  <div
    :style="[rowGutter, getJustifyStyle]"
    :class="['o-row', { 'o-row--flex': type === 'flex' }]"
  >
    <slot />
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'ORow',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    type: String,
    justify: {
      type: String,
      default: "",
    },
  },
  computed: {
    rowGutter () {
      if (this.gutter !== 0) {
        const res = {}
        res.marginLeft = `-${this.gutter / 2}px`
        res.marginRight = res.paddingLeft
        return res
      }
    },
    getJustifyStyle () {
      if (this.justify !== "") {
        let justifyStyle = ""
        switch (this.justify) {
          case "start":
            justifyStyle = {
              justifyContent: "flex-start",
            }
            break
          case "end":
            justifyStyle = {
              justifyContent: "flex-end",
            }
            break
          case "center":
            justifyStyle = {
              justifyContent: "center",
            }
            break
          case "space-around":
            justifyStyle = {
              justifyContent: "space-around",
            }
            break
          case "space-between":
            justifyStyle = {
              justifyContent: "space-between",
            }
            break
          case "space-evenly":
            justifyStyle = {
              justifyContent: "space-evenly",
            }
            break
          default:
            justifyStyle = {
              justifyContent: this.justify,
            }
            break
        }
        return justifyStyle
      }
    },
  },
}
</script>

<style lang="stylus">
.o-row--flex
  display flex
</style>
