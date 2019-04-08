<template>
  <div class="o-menu">
    <div>
      <slot />
    </div>  
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'OMenu',
  data () {
    return {

    }
  },

  created () {

  },

  methods: {

  },
}
</script>

<style lang="stylus" scoped>
.o-menu
  padding 0
  list-style none
  color white
  width 180px
</style>
