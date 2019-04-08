<template>
  <div
    :class="['o-col-' + span, 'o-col-offset-' + offset]"
    :style="gutter"
  >
    <slot />
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'OCol',
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    gutter() {
      if (
        this.$parent.$options._componentTag === "o-row" &&
        this.$parent.gutter !== 0
      ) {
        return {
          paddingLeft: `${this.$parent.gutter / 2}px`,
          paddingRight: `${this.$parent.gutter / 2}px`,
        }
      }
    },
  },
}
</script>

<style lang="stylus">
for i in 4 6 8 12 24
  .o-col-{i}
    width unit(100/24*i, '%')
    display inline-block
    box-sizing border-box
for i in 1 2 3 4 5 6
  .o-col-offset-{i}
    margin-left unit(100/24*i, '%')
</style>
