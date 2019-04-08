<template>
  <div class="menu-box">
    <!-- <o-menu>
      <o-menu-item>111</o-menu-item>
      <o-menu-item>222</o-menu-item>
      <o-sub-menu>
        <div slot="title">
          sub
        </div>
        <o-menu-item>sub-111</o-menu-item>
        <o-sub-menu>
          <div slot="title">
            sub-child
          </div>
          <o-menu-item>sub-child-111</o-menu-item>
        </o-sub-menu>
      </o-sub-menu>
    </o-menu> -->
    <o-menu>
      <template
        v-for="(item, index) in list"
      >
        <o-menu-item
          v-if="!item.children"
          :key="`m${index}`"
        >
          {{ item.title }}
        </o-menu-item>
        <re-sub-menu
          v-else
          :key="`m${index}`"
          :parent="item"
          :index="index"
        />
      </template>
    </o-menu>
  </div>
</template>

<script type="text/javascript">
import menuComponents from '../../packages/o-menu'
import reSubMenu from '../../packages/o-menu/re-submenu'
export default {
  components: {
    ...menuComponents,
    reSubMenu,
  },
  data () {
    return {
      list: [
        {title: 'AAA'},
        {title: 'BBB'},
        {
          title: 'CCC',
          children: [
            {
              title: 'CCC-11',
            },
            {
              title: 'CCC-22',
            },
            {
              title: 'CCC-33',
              children: [
                {
                  title: 'CCC-11',
                },
                {
                  title: 'CCC-11',
                },
              ],
            },
          ],
        },
      ],
    }
  },

  created () {

  },

  methods: {

  },
}
</script>

<style lang="stylus" scoped>

</style>
