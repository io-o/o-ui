<template>
  <div class="o-submenu">
    <ul>
      <div
        class="o-submenu-title"
        @click="handleClick"
      >
        <slot name="title" />
        <span
          class="o-submenu-icon"
          :style="{ transform: `rotateZ(${showChild ? 0 : 180}deg)` }"
        >^</span>
      </div>
      <div
        v-show="showChild"
        class="o-submenu-child-box"
      >
        <slot /> 
      </div>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'OSubmenu',
  data () {
    return {
      showChild: false,
    }
  },

  created () {

  },

  methods: {
    handleClick () {
      this.showChild = !this.showChild
    },
  },
}
</script>

<style lang="stylus" scoped>
.o-submenu
  background-color red
  ul
    padding 0
    list-style none
    margin 0
    .o-submenu-title
      position relative
      .o-submenu-icon
        position absolute
        top 0
        right 10px
    .o-submenu-child-box
      padding-left 20px
</style>
