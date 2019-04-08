<template>
  <div>
    <o-sub-menu>
      <div slot="title">
        {{ parent.title }}
      </div>
      <template v-for="(item, i) in parent.children">
        <o-menu-item
          v-if="!item.children"
          :key="`re_${index}_${i}`"
        >
          {{ item.title }}
        </o-menu-item>
        <re-submenu
          v-else
          :key="`re_${index}_${i}`"
          :parent="item"
        />
      </template>
    </o-sub-menu>
  </div>
</template>

<script type="text/javascript">
import oSubMenu from './o-submenu'
import oMenuItem from './o-menu-item'
export default {
  name: 'ReSubmenu',
  components: {
    oSubMenu,
    oMenuItem,
  },
  props: {
    parent: {
      type: Object,
      default: () => ({}),
    },
    index: Number,
  },
  methods: {

  },
}
</script>

<style lang="stylus" scoped>
</style>
