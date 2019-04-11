<template>
  <div class="menu-box">
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
}
</script>
