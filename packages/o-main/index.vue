<template>
  <div class="o-main">
    <slot />
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'OMain',
}
</script>

<style lang="stylus">
.o-main
  flex 1
  background-color #e9eef3
  color #333
  text-align center
  line-height 160px
</style>
