<template>
  <div class="ui">
    <o-splite-pane :offset.sync="offset">
      <div slot="left">
        <h1>left</h1>
      </div>
      <div slot="right">
        <h1>right</h1>
      </div>
    </o-splite-pane>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      offset: 0.8,
      list: [
        {
          name: 'lilei',
        },
        {
          name: 'hanmeimei',
        },
      ],
    }
  },
}
</script>
