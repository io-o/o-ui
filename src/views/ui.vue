<template>
  <div class="app-container">
    <o-row :gutter="20">
      <o-col :span="24">
        <div class="item">24</div>
      </o-col>
      <o-col :span="12">
        <div class="item">12</div>
      </o-col>
      <o-col :span="12">
        <div class="item">12</div>
      </o-col>
      <o-col :span="8">
        <div class="item">8</div>
      </o-col>
      <o-col :span="8">
        <div class="item">8</div>
      </o-col>
      <o-col :span="8">
        <div class="item">8</div>
      </o-col>
    </o-row>
    <h3>offset</h3>
    <o-row>
      <o-col :span="6">
        <div class="item">6</div>
      </o-col>
      <o-col :span="6" :offset="5">
        <div class="item">6</div>
      </o-col>
      <o-col :span="6" :offset="1">
        <div class="item">6</div>
      </o-col>
    </o-row>
    <o-row type="flex" justify="center">
      <o-col :span="6" :offset="1">
        <div class="item">center</div>
      </o-col>
    </o-row>
    <h3>container</h3>
    <o-container>
      <o-header>header</o-header>
      <o-container>
        <o-aside width="200px">Aside</o-aside>
        <o-main>Main</o-main>
      </o-container>
    </o-container>
    <h3>{{radio}}</h3>
    <o-radio v-model="radio" label="1">111</o-radio>
    <o-radio v-model="radio" label="2">222</o-radio>
  </div>
</template>

<script type="text/javascript">
import oRow from "@/components/o-row/index.vue"
import oCol from "@/components/o-col/index.vue"
import oContainer from "@/components/o-container/index.vue"
import oHeader from "@/components/o-header/index.vue"
import oMain from "@/components/o-main/index.vue"
import oAside from "@/components/o-aside/index.vue"
import oRadio from "@/components/o-radio/index.vue"
export default {
  components: {
    oRow,
    oCol,
    oContainer,
    oHeader,
    oMain,
    oAside,
    oRadio
  },
  data() {
    return {
      radio: '1'
    }
  }
}
</script>

<style lang="stylus">
.item
  background-color #99a9bf
  text-align center
  border-radius 5px
  margin 5px 0
.o-header, .o-footer
  background-color #B3C0D1
  color #333
  text-align center
  line-height 60px
.app-container
  padding 20px
</style>
