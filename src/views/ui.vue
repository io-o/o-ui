<template>
  <div>
    <o-row :gutter="20">
      <o-col :span="24">
        <div class="item">24</div>
      </o-col>
      <o-col :span="12"><div class="item">12</div></o-col>
      <o-col :span="12"><div class="item">12</div></o-col>
      <o-col :span="8"><div class="item">8</div></o-col>
      <o-col :span="8"><div class="item">8</div></o-col>
      <o-col :span="8"><div class="item">8</div></o-col>
    </o-row>
  </div>
</template>

<script type="text/javascript">
import oRow from '@/components/o-row/index.vue'
import oCol from '@/components/o-col/index.vue'
export default {
  components: {
    oRow,
    oCol
  },

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

<style lang="stylus">
.item
  background-color #99a9bf
  text-align center
  border-radius 5px
  margin 5px 0
</style>
