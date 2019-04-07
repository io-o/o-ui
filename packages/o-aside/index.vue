<template>
  <div
    class="o-aside"
    :style="getWidth"
  >
    <slot />
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'OAside',
  props: {
    width: {
      type: String,
      default: "300px",
    },
  },

  computed: {
    getWidth() {
      let res = {}
      res.width = this.width
      return res
    },
  },
}
</script>
