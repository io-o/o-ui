<template>
  <div class="o-radio-group">
    <slot />  
  </div>
</template>

<script type="text/javascript">
import Emitter from '@/mixins/emitter'
export default {
  name: 'ORadioGroup',

  componentName: 'oRadioGroup',

  mixins: [Emitter],

  props: {
    value: {},
  },
}
</script>
