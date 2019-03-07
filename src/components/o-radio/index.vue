<template>
  <div class="o-radio">
    <label>
      <input 
        type="radio"  
        :value="label" 
        :checked="cvalue == label"
        @change="$emit('change', label)"
       />
       <slot />
    </label>
  </div>
</template>

<script type="text/javascript">
export default {
  model: {
    prop: 'cvalue',
    event: 'change'
  },
  props: {
    label: Number | String | Boolean,
    cvalue: Number | String | Boolean
  },
  
}
</script>